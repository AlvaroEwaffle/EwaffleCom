/* Experimento /descubre (26-sep-2026): A = home v2, B = cápsula guiada.
 * Métrica: reuniones agendadas. Cada clic a la agenda lleva `ref=lab-<variante>[-<camino>]`
 * y empuja `booking_click` al dataLayer (GTM-55QPCXTK → GA4 de e-waffle.com).
 * Los parámetros de llegada (utm_*, gclid) se guardan y viajan en el link de agenda. */
(function () {
  var BOOKING = "https://capu.villelab.com/schedule/reunion-descubrimiento-con-alvaro";
  var variante = document.documentElement.getAttribute("data-variante") || "?";
  window.dataLayer = window.dataLayer || [];

  function guardar(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }
  function leer(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }

  // Origen del clic: se toma de la URL la primera vez y se conserva en la sesión.
  var qs = new URLSearchParams(location.search);
  ["utm_source", "utm_medium", "utm_campaign", "utm_term", "gclid"].forEach(function (k) {
    if (qs.get(k)) guardar("lab_" + k, qs.get(k));
  });

  window.lab = {
    variante: variante,
    evento: function (nombre, datos) {
      var e = { event: nombre, lab_variante: variante };
      for (var k in datos || {}) e[k] = datos[k];
      window.dataLayer.push(e);
    },
    agenda: function (camino) {
      var ref = "lab-" + variante.toLowerCase() + (camino ? "-" + camino : "");
      var u = new URL(BOOKING);
      u.searchParams.set("ref", ref);
      ["utm_source", "utm_medium", "utm_campaign", "utm_term", "gclid"].forEach(function (k) {
        var v = leer("lab_" + k);
        if (v) u.searchParams.set(k, v);
      });
      return u.toString();
    },
  };

  // Todo enlace con data-agenda apunta a la agenda con su marca y mide el clic.
  function cablear(raiz) {
    (raiz || document).querySelectorAll("[data-agenda]").forEach(function (a) {
      var camino = a.getAttribute("data-agenda") || "";
      a.setAttribute("href", window.lab.agenda(camino));
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
      if (a.__lab) return;
      a.__lab = true;
      a.addEventListener("click", function () {
        window.lab.evento("booking_click", { lab_camino: camino || "general" });
      });
    });
  }
  window.lab.cablear = cablear;
  document.addEventListener("DOMContentLoaded", function () {
    cablear();
    window.lab.evento("lab_view", {});
  });
})();
