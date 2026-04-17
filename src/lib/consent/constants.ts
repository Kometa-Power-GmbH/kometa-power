import type { Category, ConsentCategories } from "./types";

export const COOKIE_NAME = "kp_consent";
export const CONSENT_VERSION = 1;
export const MAX_AGE_DAYS = 365;

export const CATEGORIES: Category[] = [
  "necessary",
  "functional",
  "analytics",
  "marketing",
];

export const DEFAULT_CATEGORIES: ConsentCategories = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

export const ALL_ACCEPTED: ConsentCategories = {
  necessary: true,
  functional: true,
  analytics: true,
  marketing: true,
};

export const ALL_REJECTED: ConsentCategories = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};
