/* ==========================================================
   Renders the page from data.js. No build step, no libraries.
   ========================================================== */
(function () {
  "use strict";
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ICONS = {
    email: '<path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L3.8 7H3v.3l9 5.7 9-5.7V7h-.8L12 12.2z"/>',
    scholar: '<path d="M12 3 1 9.5l4 2.36V17a7 7 0 0 0 14 0v-5.14l4-2.36L12 3zm0 17a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>',
    orcid: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8.4 17H6.9V9.2h1.5V17zm-.75-9a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8zM13 17h-3.1V9.2H13c2.5 0 3.9 1.8 3.9 3.9S15.5 17 13 17zm-.1-6.4h-1.5v5h1.5c1.6 0 2.4-1.1 2.4-2.5s-.8-2.5-2.4-2.5z"/>',
    linkedin: '<path d="M20.4 2H3.6A1.6 1.6 0 0 0 2 3.6v16.8A1.6 1.6 0 0 0 3.6 22h16.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 20.4 2zM8 19H5V9h3v10zM6.5 7.7A1.7 1.7 0 1 1 8.2 6a1.7 1.7 0 0 1-1.7 1.7zM19 19h-3v-4.9c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v5h-3V9h2.9v1.4a3.2 3.2 0 0 1 2.8-1.6c3 0 3.6 2 3.6 4.6V19z"/>',
    github: '<path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .4 1 .4 1.9.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/>',
    web: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-3a15.7 15.7 0 0 0-1.3-3.6A8 8 0 0 1 18.9 8zM12 4c.8 1.2 1.5 2.5 1.9 4h-3.8c.4-1.5 1.1-2.8 1.9-4zM4.3 14a8.2 8.2 0 0 1 0-4h3.4a16.5 16.5 0 0 0 0 4H4.3zm.8 2h3a15.7 15.7 0 0 0 1.3 3.6A8 8 0 0 1 5.1 16zM8 8H5.1a8 8 0 0 1 4.3-3.6C8.8 5.5 8.4 6.7 8 8zm4 12c-.8-1.2-1.5-2.5-1.9-4h3.8c-.4 1.5-1.1 2.8-1.9 4zm2.3-6H9.7a14.7 14.7 0 0 1 0-4h4.6a14.7 14.7 0 0 1 0 4zm.3 5.6c.6-1.1 1-2.3 1.3-3.6h3a8 8 0 0 1-4.3 3.6zM16.3 14a16.5 16.5 0 0 0 0-4h3.4a8.2 8.2 0 0 1 0 4h-3.4z"/>'
  };

  const pubs = [...SITE.publications].sort((a, b) => (b.year || 0) - (a.year || 0));
  const pubUrl = p => p.url || (p.doi ? "https://doi.org/" + p.doi : "#publications");

  /* ---------- profile ---------- */
  document.title = SITE.name;
  $("#brand").textContent = SITE.shortName;
  $("#pName").textContent = SITE.name;
  $("#pRole").textContent = SITE.role;
  $("#pAff").textContent = SITE.affiliation;
  $("#pAff").href = SITE.affiliationUrl;

  const initials = SITE.name.split(/\s+/).map(w => w[0]).slice(0, 2).join("");
  const fallbackAvatar = "data:image/svg+xml," + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1565c0"/><stop offset="1" stop-color="#26a69a"/></linearGradient></defs><rect width="200" height="200" fill="url(#g)"/><text x="100" y="118" font-family="Montserrat,Arial" font-size="64" font-weight="700" fill="#fff" text-anchor="middle">${initials}</text></svg>`);
  const av = $("#avatar");
  av.alt = SITE.name;
  av.onerror = () => { av.onerror = null; av.src = fallbackAvatar; };
  av.src = SITE.photo || fallbackAvatar;

  $("#social").innerHTML = SITE.links.map(l =>
    `<li><a href="${esc(l.url)}" title="${esc(l.label)}" aria-label="${esc(l.label)}" ${l.url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>
      <svg viewBox="0 0 24 24">${ICONS[l.icon] || ICONS.web}</svg></a></li>`).join("");

  $("#aboutText").innerHTML = SITE.about.map(p => `<p>${p}</p>`).join("");
  $("#interests").innerHTML = SITE.interests.map(i => `<li>${esc(i)}</li>`).join("");
  $("#education").innerHTML = SITE.education.map(e =>
    `<li><span class="course">${esc(e.degree)}, ${esc(e.year)}</span><span class="inst">${esc(e.institution)}</span></li>`).join("");

  const T = SITE.teaching;
  $("#teachingBody").innerHTML = `<p>${T.intro}</p><ul>${T.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul>${T.note ? `<p>${T.note}</p>` : ""}`;

  $("#footerText").textContent = SITE.footer.replace("{year}", new Date().getFullYear());

  /* ---------- publication buttons ---------- */
  const buttons = p => `
    <div class="btn-row">
      ${p.pdf ? `<a class="btn outline" href="${esc(p.pdf)}" target="_blank" rel="noopener">PDF</a>` : ""}
      <button class="btn outline" data-cite="${esc(p.id)}">Cite</button>
      ${p.doi ? `<a class="btn outline" href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">DOI</a>` : ""}
      ${p.url ? `<a class="btn outline" href="${esc(p.url)}" target="_blank" rel="noopener">Link</a>` : ""}
    </div>`;

  /* ---------- featured ---------- */
  const featured = pubs.filter(p => p.featured);
  $("#featuredList").innerHTML = featured.map(p => `
    <article class="card" id="pub-${esc(p.id)}">
      <div class="meta">${esc(p.authors)}</div>
      <div class="meta">${esc([p.month, p.year].filter(Boolean).join(", "))}<span class="dot">·</span><em>${esc(p.venue)}</em>
        ${p.status ? `<span class="dot">·</span><span class="badge">${esc(p.status)}</span>` : ""}</div>
      <h3><a href="${esc(pubUrl(p))}">${esc(p.short || p.title)}</a></h3>
      <p class="abstract">${esc(p.abstract)}</p>
      ${buttons(p)}
    </article>`).join("");

  /* ---------- list with filter ---------- */
  let showAll = false, activeTag = null;
  const RECENT_N = 3;
  const list = $("#pubList"), filterEl = $("#pubFilter"), tagChip = $("#activeTag"), toggle = $("#toggleAll");

  function renderList() {
    const q = filterEl.value.trim().toLowerCase();
    let items = pubs.filter(p => {
      const hay = [p.title, p.venue, p.authors, p.status, ...(p.tags || [])].join(" ").toLowerCase();
      return (!q || hay.includes(q)) && (!activeTag || (p.tags || []).includes(activeTag));
    });
    const filtering = q || activeTag;
    const visible = (showAll || filtering) ? items : items.slice(0, RECENT_N);
    list.innerHTML = visible.length ? visible.map(p => `
      <li>${esc(p.authors)} (${esc(p.year)}).
        <a class="t" href="${esc(pubUrl(p))}">${esc(p.title)}</a>.
        <span class="v">${esc(p.venue)}</span>.
        ${p.status ? `<span class="badge">${esc(p.status)}</span>` : ""}
        ${buttons(p)}
      </li>`).join("") : `<li class="empty">No publications match this filter.</li>`;
    toggle.hidden = filtering || pubs.length <= RECENT_N;
    toggle.textContent = showAll ? "Show recent only ↑" : "See all publications →";
    tagChip.hidden = !activeTag;
    if (activeTag) tagChip.textContent = activeTag + "  ✕";
  }
  filterEl.addEventListener("input", renderList);
  toggle.addEventListener("click", () => { showAll = !showAll; renderList(); });
  tagChip.addEventListener("click", () => { activeTag = null; renderList(); });

  /* ---------- tag cloud (sized by frequency) ---------- */
  const counts = {};
  pubs.forEach(p => (p.tags || []).forEach(t => counts[t] = (counts[t] || 0) + 1));
  const max = Math.max(1, ...Object.values(counts));
  $("#tagCloud").innerHTML = Object.keys(counts).sort((a, b) => a.localeCompare(b)).map(t => {
    const size = 0.95 + 0.7 * (counts[t] / max);
    return `<a data-tag="${esc(t)}" style="font-size:${size.toFixed(2)}rem">${esc(t)}</a>`;
  }).join("");
  $("#tagCloud").addEventListener("click", e => {
    const t = e.target.closest("[data-tag]"); if (!t) return;
    activeTag = t.dataset.tag; filterEl.value = ""; renderList();
    $("#publications").scrollIntoView();
  });
  renderList();

  /* ---------- cite modal ---------- */
  function bibtex(p) {
    const key = (p.authors.split(/[ ,]+/).slice(-1)[0] || "author").toLowerCase() + p.year +
      (p.short || p.title).split(/\s+/)[0].toLowerCase().replace(/[^a-z]/g, "");
    const venueField = p.type === "article" ? "journal" : "booktitle";
    const fields = [
      ["title", `{${p.title}}`],
      ["author", p.authors.replace(/, (?=[^,]+$)/, " and ").replace(/, /g, " and ")],
      [venueField, p.venue.replace(/^Target:\s*/, "")],
      ["year", p.year],
      p.doi ? ["doi", p.doi] : null,
      p.url ? ["url", p.url] : null,
      p.status && !/published/i.test(p.status) ? ["note", p.status] : null
    ].filter(Boolean);
    return `@${p.type || "misc"}{${key},\n${fields.map(([k, v]) => `  ${k.padEnd(9)}= {${v}}`).join(",\n")}\n}`;
  }
  const modal = $("#citeModal");
  let currentCite = null;
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-cite]"); if (!b) return;
    currentCite = pubs.find(p => p.id === b.dataset.cite);
    $("#citeText").textContent = bibtex(currentCite);
    modal.hidden = false;
  });
  $("#citeClose").onclick = () => modal.hidden = true;
  modal.addEventListener("click", e => { if (e.target === modal) modal.hidden = true; });
  $("#citeCopy").onclick = async () => {
    try { await navigator.clipboard.writeText($("#citeText").textContent); $("#citeCopy").textContent = "Copied ✓"; }
    catch { $("#citeCopy").textContent = "Select & copy"; }
    setTimeout(() => $("#citeCopy").textContent = "Copy", 1500);
  };
  $("#citeDownload").onclick = () => {
    const blob = new Blob([$("#citeText").textContent], { type: "application/x-bibtex" });
    const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(blob), download: (currentCite?.id || "cite") + ".bib" });
    a.click(); URL.revokeObjectURL(a.href);
  };

  /* ---------- site search ---------- */
  const overlay = $("#searchOverlay"), sInput = $("#searchInput"), sRes = $("#searchResults");
  const index = [
    ...pubs.map(p => ({ kind: "Publication", title: p.title, text: [p.abstract, p.venue, ...(p.tags || [])].join(" "), href: "#" + (p.featured ? "pub-" + p.id : "publications") })),
    { kind: "Section", title: "About me", text: SITE.about.join(" ") + SITE.interests.join(" "), href: "#about" },
    { kind: "Section", title: "Teaching", text: T.intro + T.items.join(" "), href: "#teaching" }
  ];
  function openSearch() { overlay.hidden = false; sInput.value = ""; sRes.innerHTML = ""; setTimeout(() => sInput.focus(), 30); }
  function closeSearch() { overlay.hidden = true; }
  $("#searchBtn").onclick = openSearch;
  $("#searchClose").onclick = closeSearch;
  overlay.addEventListener("click", e => { if (e.target === overlay) closeSearch(); });
  sInput.addEventListener("input", () => {
    const q = sInput.value.trim().toLowerCase();
    if (!q) { sRes.innerHTML = ""; return; }
    const hits = index.filter(i => (i.title + " " + i.text).toLowerCase().includes(q));
    sRes.innerHTML = hits.length ? hits.map(h => `<li><a href="${h.href}" data-close><span class="kind">${h.kind}</span>${esc(h.title)}</a></li>`).join("")
                                 : `<li class="none">No results for “${esc(q)}”.</li>`;
  });
  sRes.addEventListener("click", e => { if (e.target.closest("[data-close]")) closeSearch(); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeSearch(); modal.hidden = true; }
    if (e.key === "/" && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); }
  });

  /* ---------- theme ---------- */
  const dd = $("#themeDropdown");
  const markTheme = () => $$("[data-theme-set]").forEach(b => b.classList.toggle("current", b.dataset.themeSet === (document.documentElement.dataset.theme || "auto")));
  $("#themeBtn").onclick = e => { e.stopPropagation(); dd.classList.toggle("open"); };
  document.addEventListener("click", () => dd.classList.remove("open"));
  $$("[data-theme-set]").forEach(b => b.onclick = () => {
    document.documentElement.dataset.theme = b.dataset.themeSet;
    try { localStorage.setItem("theme", b.dataset.themeSet); } catch (e) {}
    markTheme();
  });
  markTheme();

  /* ---------- nav: burger, active section, back-to-top ---------- */
  const links = $("#navLinks");
  $("#burger").onclick = () => links.classList.toggle("open");
  links.addEventListener("click", () => links.classList.remove("open"));
  const sections = ["about", "teaching", "featured", "tags"].map(id => document.getElementById(id));
  const obs = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) $$(".nav-links a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => s && obs.observe(s));
  const top = $("#toTop");
  addEventListener("scroll", () => top.classList.toggle("show", scrollY > 600), { passive: true });
  top.onclick = () => scrollTo({ top: 0 });
})();
