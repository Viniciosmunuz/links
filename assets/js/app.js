/* =========================================================
   app.js — monta a página a partir do DATA e cuida das interações.
   Normalmente você não precisa mexer aqui: edite data.js.
   ========================================================= */

(function () {
  "use strict";

  const $  = (sel) => document.querySelector(sel);
  const el = (tag, cls) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    return n;
  };

  /* ---------------------------------------------------------
     PERFIL
     --------------------------------------------------------- */
  function renderProfile() {
    const p = DATA.profile;

    document.title = p.name + " — Links";

    $("#pName").textContent     = p.name;
    $("#pHandle").textContent   = p.handle;
    $("#pLocation").textContent = p.location;
    $("#pJoined").textContent   = p.joined;

    // Avatar: imagem com fallback pras iniciais.
    const box = $("#avatar");
    if (p.avatar) {
      const img = new Image();
      img.src = p.avatar;
      img.alt = p.name;
      img.decoding = "async";
      img.onerror = () => { box.innerHTML = ""; box.appendChild(initials(p)); };
      box.appendChild(img);
    } else {
      box.appendChild(initials(p));
    }

    // Bio
    const ul = $("#pBio");
    (p.bio || []).forEach((line) => {
      const li = el("li");
      if (line.emoji) {
        const e = el("span", "emoji");
        e.textContent = line.emoji;
        li.appendChild(e);
      }
      li.appendChild(document.createTextNode(line.text));
      ul.appendChild(li);
    });
  }

  function initials(p) {
    const s = el("span", "initials");
    s.textContent = p.initials || p.name.slice(0, 2).toUpperCase();
    return s;
  }

  /* ---------------------------------------------------------
     STATS
     --------------------------------------------------------- */
  function renderStats() {
    const wrap = $("#stats");
    const list = DATA.stats || [];

    if (!list.length) { wrap.remove(); return; }

    list.forEach((s) => {
      const a = el("a", "stat");
      a.href = s.href;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", s.label || s.icon);

      const badge = el("span", "stat__badge " + (s.theme || "t-github"));
      badge.innerHTML = icon(s.icon);

      const val = el("span", "stat__value");
      val.textContent = s.value;

      a.append(badge, val);
      wrap.appendChild(a);
    });
  }

  /* ---------------------------------------------------------
     LINKS (grid bento)
     --------------------------------------------------------- */
  function renderLinks() {
    const wrap = $("#links");

    (DATA.links || []).forEach((l, index) => {
      if (index === 1) {
        const divider = el("div", "link-divider");
        divider.innerHTML = "<span>Projetos</span>";
        wrap.appendChild(divider);
      }

      const a = el("a", "link " + (l.theme || "t-github"));
      a.href = l.href || "#";
      a.dataset.span = String(l.span || 6);

      const isCopy = l.action === "copy";
      if (!isCopy && l.href && !l.href.startsWith("#") && !l.href.startsWith("mailto:")) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }

      const ico = el("span", "link__icon");
      ico.innerHTML = icon(l.icon);

      const title = el("span", "link__title");
      title.textContent = l.title;

      const sub = el("span", "link__sub");
      sub.textContent = l.sub || "";

      a.insertAdjacentHTML("beforeend", isCopy ? ICONS.copy : ICONS.external);
      a.append(ico, title, sub);

      if (l.badge) {
        const b = el("span", "link__badge");
        b.textContent = l.badge;
        a.appendChild(b);
      }

      if (isCopy) {
        a.addEventListener("click", (ev) => {
          ev.preventDefault();
          copyText(l.copy || l.sub, l.title);
        });
      }

      wrap.appendChild(a);
    });
  }

  function copyText(text, label) {
    const done = () => toast("✓ " + (label || "Copiado") + " copiado!");
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done).catch(() => fallback(text, done));
    } else {
      fallback(text, done);
    }
  }

  // file:// e http:// não têm clipboard API — este caminho cobre isso.
  function fallback(text, done) {
    const ta = el("textarea");
    ta.value = text;
    ta.style.cssText = "position:fixed;opacity:0;pointer-events:none;";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); done(); } catch (e) { toast("Não consegui copiar :("); }
    ta.remove();
  }

  /* ---------------------------------------------------------
     TEMA
     --------------------------------------------------------- */
  function initTheme() {
    const root = document.documentElement;
    const meta = document.querySelector('meta[name="theme-color"]');
    const toggle = $("#themeToggle");

    const apply = (t) => {
      root.setAttribute("data-theme", t);
      localStorage.setItem("theme", t);
      if (meta) meta.setAttribute("content", t === "light" ? "#EEF1F6" : "#0B1220");
      if (toggle) toggle.checked = t === "light";
    };

    toggle.addEventListener("change", () => {
      apply(toggle.checked ? "light" : "dark");
    });

    apply(root.getAttribute("data-theme") || "dark");
  }

  /* ---------------------------------------------------------
     ENTRADA (fade-in ao rolar) + TOAST
     --------------------------------------------------------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      items.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

    items.forEach((n, i) => {
      n.style.transitionDelay = (i * 70) + "ms";
      io.observe(n);
    });
  }

  /* ---------------------------------------------------------
     SETA DE SCROLL
     Aparece só quando há conteúdo abaixo da dobra, e some no
     primeiro scroll. A altura é reavaliada no load e no resize
     porque o avatar entra depois e muda o tamanho da página.
     --------------------------------------------------------- */
  function initScrollHint() {
    const hint = $("#scrollHint");
    let dismissed = false;

    const hasMore = () =>
      document.documentElement.scrollHeight - window.innerHeight > 60;

    const update = () => {
      if (dismissed) return;
      hint.classList.toggle("is-gone", !hasMore());
    };

    hint.addEventListener("click", () => {
      window.scrollBy({ top: Math.round(window.innerHeight * 0.75), behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
      if (dismissed || window.scrollY <= 40) return;
      dismissed = true;
      hint.classList.add("is-gone");
    }, { passive: true });

    window.addEventListener("resize", update);
    window.addEventListener("load", update);
    update();
  }

  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-visible"), 2200);
  }

  /* ---------------------------------------------------------
     BOOT
     --------------------------------------------------------- */
  renderProfile();
  renderStats();
  renderLinks();
  initTheme();
  initReveal();
  initScrollHint();
  $("#footerText").textContent = DATA.footer || "";
})();
