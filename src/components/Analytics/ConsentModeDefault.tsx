import Script from "next/script";

// Server component rendered inside the root layout. Emits the Consent Mode
// v2 `default` call before any analytics script loads. Only rendered when
// GTM is configured — otherwise there is no consumer of the signal.
//
// beforeInteractive is valid in the app router when rendered from the root
// layout. The ESLint rule `no-before-interactive-script-outside-document`
// is a pages-router heuristic and gives a false positive here.
export function ConsentModeDefault() {
  if (!process.env.NEXT_PUBLIC_GTM_ID) return null;
  return (
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script id="gtm-consent-default" strategy="beforeInteractive">
      {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
window.gtag=window.gtag||gtag;
gtag('consent','default',{
  ad_storage:'denied', ad_user_data:'denied', ad_personalization:'denied',
  analytics_storage:'denied', functionality_storage:'denied',
  personalization_storage:'denied', security_storage:'granted',
  wait_for_update: 500
});`}
    </Script>
  );
}
