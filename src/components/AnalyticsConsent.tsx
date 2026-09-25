"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "gs-analytics-consent";

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState<"accepted" | "refused" | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(CONSENT_KEY) as "accepted" | "refused" | null;
    setChoice(saved);
  }, []);

  useEffect(() => {
    if (choice !== "accepted" || document.querySelector("script[data-gs-analytics]")) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-G6Y8PGHCCS";
    script.dataset.gsAnalytics = "true";
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", "G-G6Y8PGHCCS", { anonymize_ip: true });
  }, [choice]);

  const updateChoice = (value: "accepted" | "refused") => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setChoice(value);
  };

  if (choice) return null;

  return (
    <aside className="fixed bottom-4 left-4 right-4 z-50 mx-auto flex max-w-2xl items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-white/95 p-4 text-xs text-zinc-600 shadow-lg backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/95 dark:text-zinc-300">
      <p className="leading-relaxed">
        Nous utilisons Google Analytics, uniquement avec votre accord, pour mesurer la fréquentation du site et l'améliorer. Vous pouvez accepter ou refuser.
      </p>
      <div className="flex shrink-0 gap-2">
        <button onClick={() => updateChoice("refused")} className="rounded-lg px-3 py-2 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800">
          Refuser
        </button>
        <button onClick={() => updateChoice("accepted")} className="rounded-lg bg-primary-600 px-3 py-2 font-semibold text-white hover:bg-primary-700">
          OK
        </button>
      </div>
    </aside>
  );
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
