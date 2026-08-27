/**
 * Correo de contacto del sitio.
 *
 * Dos cosas que se arreglaron acá el 26-ago-2026:
 *
 * 1. El archivo no existía. `Footer` y `book-a-call` importaban esta constante
 *    desde el commit 1b4315d ("centralize contact email"), pero nunca se agregó
 *    al repo: `next build` fallaba con "Can't resolve '@/lib/contact'" y el
 *    sitio publicado quedó congelado en el build de antes de abril.
 *
 * 2. El valor que estaba vivo era `hello@ewaffle.com`, y ese dominio —sin
 *    guion— no existe: no tiene registro A ni MX. El sitio es `e-waffle.com`,
 *    que tampoco tiene MX. O sea que todo enlace "Contact" del sitio llevaba a
 *    una dirección que rebota. El único dominio con correo real es ewaffle.cl.
 *
 * Si se crea un alias tipo `hello@ewaffle.cl`, cambiarlo acá y listo.
 */
export const CONTACT_EMAIL = "alvaro@ewaffle.cl";
