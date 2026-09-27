/* Builds the page from data.js. No dependencies. */
(function () {
  "use strict";
  const $ = s => document.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ext = url => /^https?:/.test(url) ? ' target="_blank" rel="noopener"' : "";

  /* ---- generated tile artwork (used when a tile has no image) ---- */
  function art(t, i) {
    const c = t.color || "#1565c0";
    const seed = [...t.title].reduce((a, ch) => a + ch.charCodeAt(0), i * 17);
    const r = n => ((Math.sin(seed * (n + 1)) + 1) / 2);
    const circles = Array.from({ length: 5 }, (_, n) =>
      `<circle cx="${(r(n) * 400).toFixed(0)}" cy="${(r(n + 7) * 300).toFixed(0)}" r="${(40 + r(n + 3) * 110).toFixed(0)}" fill="#fff" opacity="${(0.05 + r(n + 5) * 0.12).toFixed(2)}"/>`).join("");
    const lines = Array.from({ length: 6 }, (_, n) =>
      `<line x1="0" y1="${40 + n * 45}" x2="400" y2="${10 + n * 45 + r(n) * 60}" stroke="#fff" stroke-opacity=".08" stroke-width="1.5"/>`).join("");
    const fs = t.glyph.length > 4 ? 52 : 72;
    return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(t.title)}">
      <defs><linearGradient id="g${i}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c}"/><stop offset="1" stop-color="${c}" stop-opacity=".72"/></linearGradient></defs>
      <rect width="400" height="300" fill="${c}"/><rect width="400" height="300" fill="url(#g${i})"/>
      ${lines}${circles}
      <text x="28" y="268" font-family="Helvetica Neue,Arial" font-weight="700" font-size="${fs}" fill="#fff" opacity=".92" letter-spacing="-1">${esc(t.glyph)}</text>
    </svg>`;
  }

  /* ---- left ---- */
  document.title = SITE.name;
  const img = $("#portrait");
  const initials = SITE.name.split(/\s+/).map(w => w[0]).join("").slice(0, 2);
  const fallback = "data:image/svg+xml," + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 360"><rect width="300" height="360" fill="#d9d9d4"/><circle cx="150" cy="140" r="62" fill="#bdbdb6"/><rect x="60" y="222" width="180" height="140" rx="90" fill="#bdbdb6"/><text x="150" y="152" font-family="Arial" font-size="38" font-weight="700" fill="#fff" text-anchor="middle">${initials}</text></svg>`);
  img.alt = SITE.name;
  img.onerror = () => { img.onerror = null; img.src = fallback; SITE.photoLarge = fallback; };
  img.src = SITE.photo || fallback;
  $("#portraitLink").addEventListener("click", () => {
    $("#lightboxImg").src = SITE.photoLarge || img.src; $("#lightbox").hidden = false;
  });
  $("#lightbox").addEventListener("click", () => $("#lightbox").hidden = true);

  $("#name").textContent = SITE.name;
  $("#tagline").textContent = SITE.tagline;
  $("#links").innerHTML = SITE.links.map(l => `<a href="${esc(l.url)}"${ext(l.url)}>${esc(l.label)}</a>`).join("");
  $("#events").innerHTML = SITE.events.map(e => `
    <li><span class="d">${esc(e.date)}</span>
      <span><a href="${esc(e.url)}"${ext(e.url)}>${esc(e.title)}</a><span class="p">${esc(e.place)}</span></span></li>`).join("");

  /* ---- centre ---- */
  $("#tiles").innerHTML = SITE.tiles.map((t, i) => `
    <a class="tile" href="${esc(t.url)}"${ext(t.url)}>
      <div class="img">${t.image ? `<img src="${esc(t.image)}" alt="${esc(t.title)}" loading="lazy">` : art(t, i)}</div>
      <div class="cap"><b>${esc(t.title)}</b><span>${esc(t.text)}</span></div>
    </a>`).join("");
  $("#faqPanels").innerHTML = SITE.faq.map(f => `<article id="${esc(f.id)}"><h4>${esc(f.label)}</h4><p>${f.body}</p></article>`).join("");

  /* ---- right ---- */
  $("#news").innerHTML = SITE.showAndTell.map(n => `<li><a href="${esc(n.url)}"${ext(n.url)}>${esc(n.text)}</a></li>`).join("");
  $("#faq").innerHTML = SITE.faq.map(f => `<li><a href="#${esc(f.id)}">${esc(f.label)}</a></li>`).join("");
  const o = SITE.officeHours;
  $("#office").innerHTML = `<a href="${esc(o.url)}"${ext(o.url)}>${esc(o.when)} · ${esc(o.where)}</a>`;
  $("#footer").textContent = `© ${new Date().getFullYear()} ${SITE.footer}`;

  document.addEventListener("keydown", e => { if (e.key === "Escape") $("#lightbox").hidden = true; });
})();
