"use client";
import React from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "@/i18n";

export default function Blog() {
  const { t } = useTranslation();
  return (
    <I18nextProvider i18n={i18n}>
      <div>{t("Blog")}</div>
    </I18nextProvider>
  );
}
