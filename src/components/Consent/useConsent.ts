"use client";

import { useContext } from "react";
import { ConsentContext, type ConsentContextValue } from "./ConsentProvider";

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used inside <ConsentProvider>");
  }
  return ctx;
}
