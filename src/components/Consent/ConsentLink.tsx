"use client";

import { consentStrings } from "@/lib/consent/strings.de";
import { useConsent } from "./useConsent";

export function ConsentLink({ className }: { className?: string }) {
  const { openSettings } = useConsent();
  return (
    <button
      type="button"
      onClick={openSettings}
      className={
        className ??
        "hover:text-[#FDEAA8] transition duration-500 cursor-pointer bg-transparent p-0 text-left"
      }
    >
      {consentStrings.footerLink}
    </button>
  );
}
