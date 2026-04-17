"use client";

import { useEffect } from "react";
import { useConsent } from "@/components/Consent/useConsent";
import { GoogleAnalytics } from "./GoogleAnalytics";
import { GoogleTagManager } from "./GoogleTagManager";
import { MetaPixel } from "./MetaPixel";
import { toConsentModeFlags } from "./consentMode";

export function AnalyticsGate() {
  const { cats } = useConsent();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const flags = toConsentModeFlags(cats);
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", flags);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(["consent", "update", flags]);
    }
  }, [cats]);

  return (
    <>
      <GoogleTagManager />
      <GoogleAnalytics />
      <MetaPixel />
    </>
  );
}
