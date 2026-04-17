"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { consentStrings } from "@/lib/consent/strings.de";
import { useConsent } from "./useConsent";
import { ConsentSettingsModal } from "./ConsentSettingsModal";

const t = consentStrings.banner;

export function CookieBanner() {
  const { bannerVisible, acceptAll, rejectAll, openSettings } = useConsent();
  const acceptBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (bannerVisible) {
      const id = window.setTimeout(() => acceptBtnRef.current?.focus(), 700);
      return () => window.clearTimeout(id);
    }
  }, [bannerVisible]);

  return (
    <>
      <AnimatePresence>
        {bannerVisible && (
          <>
            <motion.div
              key="kp-consent-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[998] bg-black/40 pointer-events-none"
              aria-hidden="true"
            />
            <motion.div
              key="kp-consent-banner"
              role="dialog"
              aria-modal="false"
              aria-labelledby="kp-consent-heading"
              aria-describedby="kp-consent-body"
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 120, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-x-0 bottom-0 z-[999] px-4 pb-4 sm:px-6 sm:pb-6"
            >
              <div className="mx-auto max-w-5xl rounded-2xl bg-[#202020] text-white shadow-2xl border border-[#FDEAA8]/20 p-6 md:p-8">
                <h2
                  id="kp-consent-heading"
                  className="text-xl md:text-2xl font-black text-[#FDEAA8] mb-3"
                >
                  {t.heading}
                </h2>
                <p
                  id="kp-consent-body"
                  className="text-sm md:text-base leading-relaxed mb-5"
                >
                  {t.body}{" "}
                  <Link
                    href="/datenschutz"
                    className="underline hover:text-[#FDEAA8] transition-colors"
                  >
                    {t.privacyLinkLabel}
                  </Link>
                  .
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <button
                    ref={acceptBtnRef}
                    type="button"
                    onClick={acceptAll}
                    className="flex-1 min-w-[12rem] inline-flex justify-center py-3 px-6 text-base font-semibold rounded-full border-2 border-[#FDEAA8] bg-[#FDEAA8] text-black hover:bg-[#202020] hover:text-[#FDEAA8] transition-colors duration-300"
                  >
                    {t.acceptAll}
                  </button>
                  <button
                    type="button"
                    onClick={rejectAll}
                    className="flex-1 min-w-[12rem] inline-flex justify-center py-3 px-6 text-base font-semibold rounded-full border-2 border-[#FDEAA8] bg-[#FDEAA8] text-black hover:bg-[#202020] hover:text-[#FDEAA8] transition-colors duration-300"
                  >
                    {t.rejectAll}
                  </button>
                  <button
                    type="button"
                    onClick={openSettings}
                    className="sm:flex-none inline-flex justify-center py-3 px-6 text-base font-medium rounded-full border-2 border-white/40 text-white hover:border-[#FDEAA8] hover:text-[#FDEAA8] transition-colors duration-300"
                  >
                    {t.settings}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <ConsentSettingsModal />
    </>
  );
}
