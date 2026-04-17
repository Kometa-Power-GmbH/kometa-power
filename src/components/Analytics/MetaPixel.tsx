"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useConsent } from "@/components/Consent/useConsent";

function clearFbCookies() {
  if (typeof document === "undefined") return;
  const host = window.location.hostname;
  const domains = [host, `.${host}`];
  ["_fbp", "_fbc"].forEach((name) => {
    domains.forEach((d) => {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${d}`;
    });
    document.cookie = `${name}=; Max-Age=0; path=/`;
  });
}

export function MetaPixel() {
  const { hasConsent } = useConsent();
  const id = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const allowed = hasConsent("marketing");

  useEffect(() => {
    if (!id || allowed) return;
    clearFbCookies();
  }, [allowed, id]);

  if (!id || !allowed) return null;

  return (
    <Script id="fb-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)
}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${id}');
fbq('track','PageView');`}
    </Script>
  );
}
