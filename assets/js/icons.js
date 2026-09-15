/* =========================================================
   icons.js — SVGs inline, sem dependência externa.
   Todos usam viewBox 0 0 24 24 e herdam a cor via currentColor,
   exceto o Figma, que é colorido de propósito (igual ao design).
   Pra trocar por outro pacote de ícones, é só substituir a string.
   ========================================================= */

const ICONS = {

  mail: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2.5 8.2A3.5 3.5 0 0 1 6 4.7h12a3.5 3.5 0 0 1 3.5 3.5v7.6a3.5 3.5 0 0 1-3.5 3.5H6a3.5 3.5 0 0 1-3.5-3.5V8.2Z" fill="currentColor"/>
    <path d="m4.9 8.1 6.1 4.2a1.8 1.8 0 0 0 2 0l6.1-4.2" fill="none" stroke="rgba(0,0,0,.38)" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`,

  github: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12Z"/>
  </svg>`,

  facebook: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="currentColor" d="M13.55 22v-8.53h2.9l.43-3.36h-3.33V7.97c0-.97.27-1.63 1.66-1.63h1.78V3.33c-.31-.04-1.37-.13-2.6-.13-2.57 0-4.34 1.57-4.34 4.45v2.46H7.15v3.36h2.9V22h3.5Z"/>
  </svg>`,

  figma: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8.5 1.5H12v7H8.5a3.5 3.5 0 1 1 0-7Z" fill="#F24E1E"/>
    <path d="M12 1.5h3.5a3.5 3.5 0 1 1 0 7H12v-7Z" fill="#FF7262"/>
    <path d="M8.5 8.5H12v7H8.5a3.5 3.5 0 1 1 0-7Z" fill="#A259FF"/>
    <circle cx="15.5" cy="12" r="3.5" fill="#1ABCFE"/>
    <path d="M12 15.5V19a3.5 3.5 0 1 1-3.5-3.5H12Z" fill="#0ACF83"/>
  </svg>`,

  dev: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="1.6" y="4.6" width="20.8" height="14.8" rx="3.6" fill="none" stroke="currentColor" stroke-width="1.7"/>
    <text x="12" y="15.3" text-anchor="middle" font-size="7.6" font-weight="800" letter-spacing="0.3" fill="currentColor" font-family="Plus Jakarta Sans, Segoe UI, sans-serif">DEV</text>
  </svg>`,

  instagram: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.9">
    <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.4"/>
    <circle cx="12" cy="12" r="4.2"/>
    <circle cx="17.1" cy="6.9" r="1.2" fill="currentColor" stroke="none"/>
  </svg>`,

  linkedin: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/>
  </svg>`,

  whatsapp: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M21 11.6a8.6 8.6 0 0 1-12.8 7.5L3.4 20.6l1.5-4.7A8.6 8.6 0 1 1 21 11.6Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
    <path fill="currentColor" d="M9.3 9c.28-.66.57-.67.83-.68h.6c.2 0 .47 0 .7.5l.75 1.83c.1.2.02.4-.1.56l-.47.58c-.16.2-.3.39-.13.7.47.86 1.27 1.6 2.2 2.1.3.14.5.13.7-.06l.58-.66c.17-.2.37-.2.57-.11l1.72.87c.25.12.38.27.38.48v.57c0 .5-.4.98-.87 1.17-.4.16-.87.18-1.32.07a10.7 10.7 0 0 1-4.06-2.32 10.6 10.6 0 0 1-2.3-4.05c-.12-.47-.1-.98.22-1.55Z"/>
  </svg>`,

  x: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="currentColor" d="M18.24 2.25h3.31l-7.23 8.26L23 22.75h-6.66l-5.21-6.82-5.97 6.82H1.85l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 18.5h1.83L7.08 4.13H5.12l11.96 16.62Z"/>
  </svg>`,

  youtube: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="2.2" y="5.2" width="19.6" height="13.6" rx="4.4" fill="none" stroke="currentColor" stroke-width="1.9"/>
    <path fill="currentColor" d="M10.3 9.2v5.6l4.8-2.8-4.8-2.8Z"/>
  </svg>`,

  spotify: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
    <circle cx="12" cy="12" r="9.4"/>
    <path d="M7.3 9.3c3-.8 6.3-.4 8.9 1.1"/>
    <path d="M7.9 12.5c2.5-.7 5.2-.3 7.4 1"/>
    <path d="M8.5 15.5c2-.5 4.1-.2 5.9.8"/>
  </svg>`,

  dribbble: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round">
    <circle cx="12" cy="12" r="9.4"/>
    <path d="M5.2 5.8c4.6 3.1 8.3 7.4 10.4 12.9"/>
    <path d="M2.8 13.5c5-1 10 .1 13.6 3"/>
    <path d="M8.4 3.1c3.7 3.6 6.4 8.1 8.2 13"/>
    <path d="M21.1 10.4c-3.4.7-7.3.5-11-.7"/>
  </svg>`,

  behance: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="1.6" y="4.6" width="20.8" height="14.8" rx="3.6" fill="none" stroke="currentColor" stroke-width="1.7"/>
    <text x="12" y="15.4" text-anchor="middle" font-size="8" font-weight="800" fill="currentColor" font-family="Plus Jakarta Sans, Segoe UI, sans-serif">Bē</text>
  </svg>`,

  scissors: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="6.1" cy="6.2" r="2.7"/>
    <circle cx="6.1" cy="17.8" r="2.7"/>
    <path d="M8.2 7.7 20 19.2M8.2 16.3 20 4.8"/>
    <path d="m12.7 12 2.1 2.1" opacity=".55"/>
  </svg>`,

  car: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="m5 11 1.6-4.1A2 2 0 0 1 8.5 5.6h7a2 2 0 0 1 1.9 1.3L19 11"/>
    <path d="M8 7.1h8l1.3 3.4H6.7L8 7.1Z" opacity=".55"/>
    <path d="M3.5 11h17v5.5a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 0 1-1.5-1.5V11Z"/>
    <path d="M5.7 12.8h1.8M16.5 12.8h1.8"/>
    <circle cx="7" cy="15.2" r="1.2"/><circle cx="17" cy="15.2" r="1.2"/>
  </svg>`,

  bot: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="7" width="16" height="12" rx="3"/>
    <path d="M12 7V4M9 4h6"/><circle cx="12" cy="3" r=".8" fill="currentColor"/>
    <circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/>
    <path d="M8.5 16h7M6.5 10H4.2M19.8 10h-2.3"/>
  </svg>`,

  menu: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 5.5h16v13H4z"/>
    <path d="M7 9h10M7 12.5h7M7 16h4"/>
    <circle cx="17" cy="16" r="1.4" fill="currentColor" stroke="none"/>
  </svg>`,

  globe: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8">
    <circle cx="12" cy="12" r="9.4"/>
    <path d="M2.9 9.6h18.2M2.9 14.4h18.2"/>
    <path d="M12 2.6c2.6 2.7 3.9 6 3.9 9.4s-1.3 6.7-3.9 9.4c-2.6-2.7-3.9-6-3.9-9.4S9.4 5.3 12 2.6Z"/>
  </svg>`,

  external: `<svg class="link__ext" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 3.8h6.2V10"/>
    <path d="M20.2 3.8 11.4 12.6"/>
    <path d="M18.4 14.2v4a2.4 2.4 0 0 1-2.4 2.4H6a2.4 2.4 0 0 1-2.4-2.4V8.2A2.4 2.4 0 0 1 6 5.8h4"/>
  </svg>`,

  copy: `<svg class="link__ext" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
    fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
    <rect x="8.6" y="8.6" width="12" height="12" rx="2.6"/>
    <path d="M15.4 4.4H6.2a2.6 2.6 0 0 0-2.6 2.6v9.2"/>
  </svg>`
};

/** Devolve o SVG do ícone, ou o globo como fallback. */
function icon(name) {
  return ICONS[name] || ICONS.globe;
}
