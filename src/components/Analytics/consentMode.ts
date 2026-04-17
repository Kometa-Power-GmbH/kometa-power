import type { ConsentCategories } from "@/lib/consent/types";

export type ConsentModeFlag = "granted" | "denied";

export interface ConsentModeFlags {
  ad_storage: ConsentModeFlag;
  ad_user_data: ConsentModeFlag;
  ad_personalization: ConsentModeFlag;
  analytics_storage: ConsentModeFlag;
  functionality_storage: ConsentModeFlag;
  personalization_storage: ConsentModeFlag;
  security_storage: ConsentModeFlag;
}

export function toConsentModeFlags(cats: ConsentCategories): ConsentModeFlags {
  return {
    analytics_storage: cats.analytics ? "granted" : "denied",
    ad_storage: cats.marketing ? "granted" : "denied",
    ad_user_data: cats.marketing ? "granted" : "denied",
    ad_personalization: cats.marketing ? "granted" : "denied",
    functionality_storage: cats.functional ? "granted" : "denied",
    personalization_storage: cats.functional ? "granted" : "denied",
    security_storage: "granted",
  };
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
