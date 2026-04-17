"use client";

import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import {
  ALL_ACCEPTED,
  ALL_REJECTED,
  DEFAULT_CATEGORIES,
} from "@/lib/consent/constants";
import {
  isValid,
  readConsent,
  writeConsent,
} from "@/lib/consent/storage";
import type {
  Category,
  ConsentCategories,
  ConsentRecord,
} from "@/lib/consent/types";

interface State {
  consent: ConsentRecord | null;
  bannerVisible: boolean;
  settingsOpen: boolean;
}

type Action =
  | { type: "HYDRATE"; consent: ConsentRecord | null }
  | { type: "SET"; consent: ConsentRecord }
  | { type: "OPEN_SETTINGS" }
  | { type: "CLOSE_SETTINGS" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "HYDRATE":
      return {
        ...state,
        consent: action.consent,
        bannerVisible: !isValid(action.consent),
      };
    case "SET":
      return {
        consent: action.consent,
        bannerVisible: false,
        settingsOpen: false,
      };
    case "OPEN_SETTINGS":
      return { ...state, settingsOpen: true };
    case "CLOSE_SETTINGS":
      return { ...state, settingsOpen: false };
    default:
      return state;
  }
}

export interface ConsentContextValue {
  consent: ConsentRecord | null;
  cats: ConsentCategories;
  bannerVisible: boolean;
  settingsOpen: boolean;
  hasConsent: (category: Category) => boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  save: (cats: Partial<ConsentCategories>) => void;
  openSettings: () => void;
  closeSettings: () => void;
}

export const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({
  initialConsent,
  children,
}: {
  initialConsent: ConsentRecord | null;
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, {
    consent: initialConsent,
    bannerVisible: !isValid(initialConsent),
    settingsOpen: false,
  });

  // Re-check client cookie on mount in case SSR version was stale (e.g. new tab
  // after user consented in another tab).
  useEffect(() => {
    const current = readConsent();
    if (JSON.stringify(current) !== JSON.stringify(state.consent)) {
      dispatch({ type: "HYDRATE", consent: current });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const persist = useCallback((cats: ConsentCategories) => {
    const record = writeConsent(cats);
    dispatch({ type: "SET", consent: record });
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("kp:consent-change", { detail: record }),
      );
    }
  }, []);

  const acceptAll = useCallback(() => persist(ALL_ACCEPTED), [persist]);
  const rejectAll = useCallback(() => persist(ALL_REJECTED), [persist]);
  const save = useCallback(
    (cats: Partial<ConsentCategories>) =>
      persist({ ...DEFAULT_CATEGORIES, ...cats, necessary: true }),
    [persist],
  );
  const openSettings = useCallback(
    () => dispatch({ type: "OPEN_SETTINGS" }),
    [],
  );
  const closeSettings = useCallback(
    () => dispatch({ type: "CLOSE_SETTINGS" }),
    [],
  );

  const value = useMemo<ConsentContextValue>(() => {
    const cats = state.consent?.cats ?? DEFAULT_CATEGORIES;
    return {
      consent: state.consent,
      cats,
      bannerVisible: state.bannerVisible,
      settingsOpen: state.settingsOpen,
      hasConsent: (category) => cats[category] === true,
      acceptAll,
      rejectAll,
      save,
      openSettings,
      closeSettings,
    };
  }, [
    state.consent,
    state.bannerVisible,
    state.settingsOpen,
    acceptAll,
    rejectAll,
    save,
    openSettings,
    closeSettings,
  ]);

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
}
