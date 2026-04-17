"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useConsent } from "@/components/Consent/useConsent";

function clearGaCookies() {
  if (typeof document === "undefined") return;
  const host = window.location.hostname;
  const domains = [host, `.${host}`];
  document.cookie.split(";").forEach((raw) => {
    const name = raw.split("=")[0]?.trim();
    if (!name) return;
    if (name === "_ga" || name === "_gid" || name.startsWith("_ga_")) {
      domains.forEach((d) => {
        document.cookie = `${name}=; Max-Age=0; path=/; domain=${d}`;
      });
      document.cookie = `${name}=; Max-Age=0; path=/`;
    }
  });
}

export function GoogleAnalytics() {
  const { hasConsent } = useConsent();
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const id = process.env.NEXT_PUBLIC_GA_ID;
  const allowed = hasConsent("analytics");

  useEffect(() => {
    if (!id || allowed) return;
    (window as unknown as Record<string, boolean>)[`ga-disable-${id}`] = true;
    clearGaCookies();
  }, [allowed, id]);

  if (!id || gtmId || !allowed) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
window.gtag=window.gtag||gtag;
gtag('js', new Date());
gtag('config','${id}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
