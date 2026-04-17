"use client";

import Script from "next/script";

export function GoogleTagManager() {
  const id = process.env.NEXT_PUBLIC_GTM_ID;
  if (!id) return null;

  return (
    <Script id="gtm-loader" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;
j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');`}
    </Script>
  );
}
