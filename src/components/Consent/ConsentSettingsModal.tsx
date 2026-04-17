"use client";

import "@ant-design/v5-patch-for-react-19";
import { ConfigProvider, Modal, Switch, theme } from "antd";
import { useEffect, useState } from "react";
import { CATEGORY_DEFINITIONS } from "@/lib/consent/categories";
import { DEFAULT_CATEGORIES } from "@/lib/consent/constants";
import { consentStrings } from "@/lib/consent/strings.de";
import type { Category, ConsentCategories } from "@/lib/consent/types";
import { useConsent } from "./useConsent";

const t = consentStrings.modal;

export function ConsentSettingsModal() {
  const { settingsOpen, closeSettings, cats, acceptAll, rejectAll, save } =
    useConsent();
  const [selection, setSelection] = useState<ConsentCategories>(cats);

  useEffect(() => {
    if (settingsOpen) {
      setSelection({ ...DEFAULT_CATEGORIES, ...cats, necessary: true });
    }
  }, [settingsOpen, cats]);

  const toggle = (id: Category, value: boolean) => {
    if (id === "necessary") return;
    setSelection((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#FDEAA8",
          colorBgElevated: "#202020",
          colorText: "#ffffff",
          borderRadius: 12,
        },
      }}
    >
      <Modal
        open={settingsOpen}
        onCancel={closeSettings}
        title={t.title}
        maskClosable={false}
        destroyOnClose
        width={720}
        zIndex={1000}
        footer={
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={rejectAll}
              className="flex-1 inline-flex justify-center py-2.5 px-5 text-sm font-semibold rounded-full border-2 border-white/40 text-white hover:border-[#FDEAA8] hover:text-[#FDEAA8] transition-colors"
            >
              {t.rejectAll}
            </button>
            <button
              type="button"
              onClick={() => save(selection)}
              className="flex-1 inline-flex justify-center py-2.5 px-5 text-sm font-semibold rounded-full border-2 border-[#FDEAA8] text-[#FDEAA8] hover:bg-[#FDEAA8] hover:text-black transition-colors"
            >
              {t.saveSelection}
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="flex-1 inline-flex justify-center py-2.5 px-5 text-sm font-semibold rounded-full border-2 border-[#FDEAA8] bg-[#FDEAA8] text-black hover:bg-[#202020] hover:text-[#FDEAA8] transition-colors"
            >
              {t.acceptAll}
            </button>
          </div>
        }
      >
        <p className="text-sm leading-relaxed mb-5 text-white/80">{t.intro}</p>
        <div className="space-y-4">
          {CATEGORY_DEFINITIONS.map((cat) => {
            const checked = !!selection[cat.id];
            return (
              <div
                key={cat.id}
                className="rounded-lg border border-white/10 p-4 bg-black/20"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-base font-semibold text-[#FDEAA8]">
                    {cat.label}
                  </h3>
                  <Switch
                    checked={checked}
                    disabled={cat.locked}
                    onChange={(v) => toggle(cat.id, v)}
                    aria-label={cat.label}
                  />
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  {cat.description}
                </p>
                {cat.services.length > 0 && (
                  <ul className="mt-3 text-xs text-white/60 space-y-1">
                    {cat.services.map((s) => (
                      <li key={s.name}>
                        <span className="font-medium text-white/80">
                          {s.name}
                        </span>{" "}
                        — {s.provider} · {s.duration}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </Modal>
    </ConfigProvider>
  );
}
