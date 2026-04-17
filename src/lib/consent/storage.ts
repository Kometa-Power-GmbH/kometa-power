import Cookies from "js-cookie";
import {
  ALL_REJECTED,
  COOKIE_NAME,
  CONSENT_VERSION,
  MAX_AGE_DAYS,
} from "./constants";
import type { ConsentCategories, ConsentRecord } from "./types";

function parse(value: string | undefined): ConsentRecord | null {
  if (!value) return null;
  try {
    const decoded = decodeURIComponent(value);
    const record = JSON.parse(decoded) as Partial<ConsentRecord>;
    if (
      typeof record !== "object" ||
      record === null ||
      record.v !== CONSENT_VERSION ||
      typeof record.ts !== "string" ||
      typeof record.cats !== "object"
    ) {
      return null;
    }
    const cats = record.cats as ConsentCategories;
    return {
      v: record.v,
      ts: record.ts,
      cats: {
        necessary: true,
        functional: !!cats.functional,
        analytics: !!cats.analytics,
        marketing: !!cats.marketing,
      },
    };
  } catch {
    return null;
  }
}

export function readConsent(): ConsentRecord | null {
  if (typeof document === "undefined") return null;
  return parse(Cookies.get(COOKIE_NAME));
}

export function writeConsent(
  cats: Partial<ConsentCategories>,
): ConsentRecord {
  const normalized: ConsentCategories = {
    necessary: true,
    functional: !!cats.functional,
    analytics: !!cats.analytics,
    marketing: !!cats.marketing,
  };
  const record: ConsentRecord = {
    v: CONSENT_VERSION,
    ts: new Date().toISOString(),
    cats: normalized,
  };
  Cookies.set(COOKIE_NAME, encodeURIComponent(JSON.stringify(record)), {
    expires: MAX_AGE_DAYS,
    sameSite: "lax",
    secure: typeof window !== "undefined" && window.location.protocol === "https:",
    path: "/",
  });
  return record;
}

export function clearConsent(): void {
  Cookies.remove(COOKIE_NAME, { path: "/" });
}

export async function getServerConsent(): Promise<ConsentRecord | null> {
  const { cookies } = await import("next/headers");
  const store = await cookies();
  return parse(store.get(COOKIE_NAME)?.value);
}

export function isValid(record: ConsentRecord | null): record is ConsentRecord {
  return !!record && record.v === CONSENT_VERSION;
}

export { ALL_REJECTED };
