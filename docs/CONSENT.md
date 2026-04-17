# Cookie Consent — Architecture & Legal Rules

This document describes the GDPR / TTDSG / DDG-compliant cookie consent
infrastructure of the Kometa Power website. Read this before changing anything
related to cookies, tracking, or third-party scripts.

## Legal invariants (must not be violated)

1. **No non-essential cookies or scripts before consent.** Technical cookies
   strictly required to deliver the service (session, CSRF, consent storage)
   may be set under § 25 Abs. 2 TTDSG/DDG. Everything else (analytics,
   marketing, embeds) requires opt-in consent under Art. 6 (1) (a) DSGVO +
   § 25 Abs. 1 TTDSG/DDG.
2. **Accept and reject are equally prominent.** `Alle akzeptieren` and
   `Alle ablehnen` use identical styling, size, and order on the banner.
3. **No pre-ticked boxes.** All non-essential categories default to OFF
   in the settings modal.
4. **No cookie wall.** Site stays fully functional when the user rejects.
5. **One-click withdrawal.** The footer link "Cookie-Einstellungen"
   reopens the modal with the current state.
6. **Versioned consent.** Changing `CONSENT_VERSION` invalidates all
   stored consents and re-prompts every visitor. Bump it whenever
   categories or their scope change, or the privacy policy is updated in
   a way that affects stored consents.
7. **Max 12 months storage.** Cookie TTL = 365 days.
8. **Consent state is logged only client-side** (inside the cookie value
   itself). No server-side audit log.

## Architecture

```
src/lib/consent/
  constants.ts      COOKIE_NAME, CONSENT_VERSION, MAX_AGE_DAYS, defaults
  types.ts          Category, ConsentCategories, ConsentRecord
  categories.ts     CATEGORY_DEFINITIONS (DE labels + descriptions + services)
  strings.de.ts     UI strings (DE)
  storage.ts        readConsent(), writeConsent(), clearConsent(),
                    getServerConsent() via next/headers

src/components/Consent/
  ConsentProvider.tsx       React Context + useReducer
  useConsent.ts             hook
  CookieBanner.tsx          bottom-fixed Tailwind banner + backdrop
  ConsentSettingsModal.tsx  AntD Modal with granular switches
  ConsentLink.tsx           footer trigger button

src/components/Analytics/
  GoogleTagManager.tsx  NEXT_PUBLIC_GTM_ID + Consent Mode v2 defaults denied
  GoogleAnalytics.tsx   NEXT_PUBLIC_GA_ID (only when GTM_ID not set)
  MetaPixel.tsx         NEXT_PUBLIC_META_PIXEL_ID
  consentMode.ts        toConsentModeFlags(cats) → gtag consent flags
  AnalyticsGate.tsx     umbrella; pushes consent updates on every change
  index.ts
```

Integration points:

- `src/app/layout.tsx` (async) reads the cookie on the server via
  `getServerConsent()` and passes it into `<ConsentProvider initialConsent>`.
  `<CookieBanner />` and `<AnalyticsGate />` are mounted inside.
- `src/components/Footer/index.jsx` adds a `<ConsentLink />` entry in the
  "Wichtige Links" list.

## Consent cookie

Name: `kp_consent` · Path `/` · SameSite `Lax` · Secure (on HTTPS) ·
Max-Age 365 days · First-party only.

Value is `encodeURIComponent(JSON.stringify({ v, ts, cats }))`:

```json
{ "v": 1, "ts": "2026-04-17T12:34:56.789Z",
  "cats": { "necessary": true, "functional": false,
            "analytics": false, "marketing": false } }
```

When `v` does not match `CONSENT_VERSION`, the record is ignored and the
banner re-appears.

## Google Consent Mode v2

When `NEXT_PUBLIC_GTM_ID` is set, `<GoogleTagManager />` injects a
`beforeInteractive` script that calls `gtag('consent','default', {...})`
with **all storage types denied** except `security_storage`. GTM itself is
loaded `afterInteractive`. Whenever the user updates their choices,
`<AnalyticsGate />` runs an effect that calls
`gtag('consent','update', toConsentModeFlags(cats))`.

If only `NEXT_PUBLIC_GA_ID` is set (without GTM), `<GoogleAnalytics />`
loads `gtag.js` **only after** consent to the analytics category. On
withdrawal, it sets `window['ga-disable-<id>'] = true` and deletes
`_ga`, `_ga_*`, `_gid` cookies from the current host.

`<MetaPixel />` loads `fbevents.js` only when marketing consent is given.
On withdrawal it deletes `_fbp` and `_fbc`.

None of these components do anything until the corresponding env var is set,
so the production bundle ships with zero tracking by default.

## Environment variables

```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX            # optional, preferred path
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX            # only if you don't use GTM
NEXT_PUBLIC_META_PIXEL_ID=1234567890      # optional
```

All are `NEXT_PUBLIC_*` because they are read in client components. Keep
values out of `.env` checked into the repo.

## How to add a new category

1. Add it to `Category` in `src/lib/consent/types.ts`.
2. Add the default (false) in `DEFAULT_CATEGORIES`, `ALL_ACCEPTED`,
   `ALL_REJECTED` in `src/lib/consent/constants.ts`.
3. Add a `CategoryDefinition` entry (German label + description) in
   `src/lib/consent/categories.ts`.
4. Update `toConsentModeFlags()` in `components/Analytics/consentMode.ts`
   if the new category maps to a Google Consent Mode flag.
5. Update `src/app/datenschutz/page.tsx`: add the category to the cookie
   table and a descriptive section.
6. Bump `CONSENT_VERSION` in `constants.ts` so existing visitors re-consent.

## How to add a new tracking service

1. Create `src/components/Analytics/YourService.tsx`. Guard on the
   environment variable and on `hasConsent('analytics' | 'marketing' | ...)`.
2. On consent withdrawal, clear any cookies the service sets.
3. Add `<YourService />` to `AnalyticsGate.tsx`.
4. List the cookies and the provider in `CATEGORY_DEFINITIONS[category].services`.
5. Add a new row in the cookie table in `src/app/datenschutz/page.tsx`
   and describe the service in a new subsection.
6. Bump `CONSENT_VERSION`.

## Testing checklist

- Private window → banner appears after Preloader, with `Alle akzeptieren`
  and `Alle ablehnen` of equal size/contrast.
- Clicking `Alle ablehnen` writes `kp_consent` with all non-essential
  categories false. No third-party requests in the Network tab.
- Reload → banner no longer shown.
- Footer → "Cookie-Einstellungen" → modal opens with current state.
- Toggle Analyse on, save → cookie updated; with `NEXT_PUBLIC_GA_ID`
  set, `gtag/js` now loads.
- Bump `CONSENT_VERSION` → reload → banner reappears.
- Delete cookie manually → banner reappears.
- No hydration warnings in the React 19 console.

## Future work

- Server-side audit log (not implemented): would require logging
  timestamp, IP hash, UA, and the consent record server-side for
  evidence. Only needed if the Datenschutzbehörde requests proof.
- Consent-gated embeds (YouTube, Google Maps): build a
  `<ConsentGate category="marketing" fallback={...} />` wrapper
  component; the fallback offers a one-click `grant('marketing')`.
- i18n: all strings currently live in `src/lib/consent/strings.de.ts`
  and `src/lib/consent/categories.ts`; swap for a locale-aware loader
  when the site becomes multilingual.
