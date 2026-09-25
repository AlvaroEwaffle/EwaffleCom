"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function sendEvent(eventName: string, params: Record<string, string | number | boolean | undefined>) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
}

export default function Analytics() {
  useEffect(() => {
    const trackedScrollMarks = new Set<number>();

    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-track-event]");
      if (!target) return;

      const eventName = target.dataset.trackEvent;
      if (!eventName) return;

      sendEvent(eventName, {
        event_category: target.dataset.trackCategory || "engagement",
        event_label: target.dataset.trackLabel || target.textContent?.trim() || "unknown",
      });
    };

    const onScroll = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const progress = (window.scrollY / maxScroll) * 100;
      [25, 50, 75].forEach((mark) => {
        if (progress >= mark && !trackedScrollMarks.has(mark)) {
          trackedScrollMarks.add(mark);
          sendEvent("scroll_depth", {
            event_category: "engagement",
            event_label: `${mark}%`,
            percent_scrolled: mark,
          });
        }
      });
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
