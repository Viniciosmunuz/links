/* =========================================================
   data.js — É AQUI QUE VOCÊ EDITA TUDO.
   Nenhum outro arquivo precisa ser tocado pra mudar conteúdo.
   ========================================================= */

const DATA = {

  /* ---------- PERFIL ---------- */
  profile: {
    name:   "Vinicios Muniz",
    handle: "@viniciosmuniz_",
    avatar: "assets/img/avatar.jpg",   // fundo branco da foto trocado pelo azul do círculo
    initials: "VM",                    // só aparece se o avatar não carregar

    bio: [
      { emoji: "🎈", text: "09.10.2003" },
      { emoji: "👨‍💻", text: "Análise e Desenvolvimento de Sistemas" },
      { emoji: "⚙️", text: "Next.js · TypeScript · Node · PostgreSQL" },
      { emoji: "🚀", text: "Do primeiro commit ao deploy." }
    ],

    location: "Manaus, AM",
    joined:   "No GitHub desde 2023"
  },

  /* ---------- STATS SOCIAIS ----------
     Números de 20/08/2026. Instagram e GitHub foram conferidos direto na fonte;
     as conexões do LinkedIn foram informadas por ele (a rede não deixa ler sem login).
     O GitHub mostra repositórios, e não seguidores, porque seguidores estão em 0. */
  stats: [
    { icon: "instagram", theme: "t-instagram", value: "1.980",   href: "https://www.instagram.com/viniciosmuniz_", label: "Instagram" },
    { icon: "github",    theme: "t-github",    value: "13 repos", href: "https://github.com/Viniciosmunuz",         label: "GitHub" },
    { icon: "linkedin",  theme: "t-linkedin",  value: "100",          href: "https://www.linkedin.com/in/vinicios-muniz-332370423/", label: "LinkedIn" },
    { icon: "whatsapp",  theme: "t-whatsapp",  value: "Chamar",   href: "https://wa.me/qr/CFKI7EKZUH7EK1",              label: "WhatsApp" }
  ],

  /* ---------- LINKS (o grid bento) ----------
     span  = quantas colunas de 6 o card ocupa. Use 6 / 4+2 / 3+3.
     theme = classe de cor (a lista completa está no README).
     action: "copy" faz o card copiar o texto em vez de abrir link.   */
  links: [
    {
      icon: "mail", theme: "t-email", span: 4,
      title: "Email", sub: "jvinipmuniz@gmail.com",
      href: "mailto:jvinipmuniz@gmail.com",
      action: "copy", copy: "jvinipmuniz@gmail.com"
    },
    {
      // slot estreito: subtítulo curto, senão o texto é cortado
      icon: "globe", theme: "t-light", span: 2,
      title: "Portfólio", sub: "Meu site",
      href: "https://viniciosmunuz.github.io"
    },
    {
      icon: "github", theme: "t-github", span: 6,
      title: "GitHub", sub: "@Viniciosmunuz",
      href: "https://github.com/Viniciosmunuz",
      badge: "Follow"
    },
    {
      icon: "linkedin", theme: "t-linkedin", span: 3,
      title: "LinkedIn", sub: "Vamos nos conectar",
      href: "https://www.linkedin.com/in/vinicios-muniz-332370423/"
    },
    {
      icon: "whatsapp", theme: "t-whatsapp", span: 3,
      title: "WhatsApp", sub: "Chama aí",
      href: "https://wa.me/qr/CFKI7EKZUH7EK1"
    },
    {
      icon: "instagram", theme: "t-instagram", span: 3,
      title: "Instagram", sub: "@viniciosmuniz_",
      href: "https://www.instagram.com/viniciosmuniz_"
    },
    {
      icon: "scissors", theme: "t-accent", span: 3,
      title: "BarberFlow", sub: "Ver o app no ar",
      href: "https://fullstackweek-barber-v2-smoky.vercel.app"
    }
  ],

  /* ---------- RODAPÉ ---------- */
  footer: "© 2026 Vinicios Muniz"
};
