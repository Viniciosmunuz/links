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
    { icon: "linkedin",  theme: "t-linkedin",  value: "100",      href: "https://www.linkedin.com/in/vinicios-muniz-332370423/", label: "LinkedIn" },
  ],

  /* ---------- LINKS (o grid bento) ----------
     span  = quantas colunas de 6 o card ocupa. Use 6 / 4+2 / 3+3.
     theme = classe de cor (a lista completa está no README).
     action: "copy" faz o card copiar o texto em vez de abrir link.   */
  links: [
    {
      icon: "mail", theme: "t-email", span: 6,
      title: "Email", sub: "jvinipmuniz@gmail.com",
      href: "mailto:jvinipmuniz@gmail.com",
      action: "copy", copy: "jvinipmuniz@gmail.com"
    },
    {
      // slot estreito: subtítulo curto, senão o texto é cortado
      icon: "scissors", theme: "t-light", span: 3,
      title: "BarberFlow", sub: "Meu projeto",
      href: "https://fullstackweek-barber-v2-smoky.vercel.app/"
    },
    {
      icon: "car", theme: "t-accent", span: 3,
      title: "Auto Peças", sub: "Sistema em TypeScript",
      href: "https://github.com/Viniciosmunuz/car-pecas-control"
    },
    {
      icon: "bot", theme: "t-whatsapp", span: 3,
      title: "Chatbot Papaleguas", sub: "Projeto de chatbot",
      href: "https://github.com/Viniciosmunuz/botativopapaleguas"
    },
    {
      icon: "menu", theme: "t-linkedin", span: 3,
      title: "Menu Online", sub: "Projeto em construção",
      href: "#"
    },
  ],

  /* ---------- RODAPÉ ---------- */
  footer: "© 2026 Vinicios Muniz"
};
