"use client";

import { useEffect } from "react";

/**
 * Entrada por scroll para todo lo que lleve `data-motion`.
 *
 * Vive en un componente sin marcado propio para que el resto de la página siga
 * siendo server-rendered: el HTML llega completo al crawler y esto solo agrega
 * la clase que dispara la transición.
 */
export default function Reveal() {
  useEffect(() => {
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-motion]"));

    if (quieto || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("es-visible"));
      return;
    }

    const ojo = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("es-visible");
          ojo.unobserve(e.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    items.forEach((el) => ojo.observe(el));
    return () => ojo.disconnect();
  }, []);

  return null;
}
