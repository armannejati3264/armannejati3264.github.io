/* Renders the content of content.js into index.html.
   You normally do not need to edit this file. */
(function () {
  "use strict";

  var S = window.SITE;
  if (!S) {
    document.querySelector("main").insertAdjacentHTML(
      "afterbegin",
      '<p class="todo">content.js could not be loaded. Check it for a missing comma or quote.</p>'
    );
    return;
  }

  var TODO_RE = /\[TODO:[^\]]*\]/g;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  // Escape text and highlight any [TODO: ...] markers.
  function t(s) {
    return esc(s).replace(TODO_RE, function (m) { return '<mark class="todo">' + m + "</mark>"; });
  }
  function isTodo(s) { return !s || /^\s*\[TODO/.test(s); }
  function isExternal(url) { return /^https?:\/\//.test(url); }

  // A link, or plain highlighted text when the url is missing / TODO.
  function link(label, url, cls) {
    cls = cls ? ' class="' + cls + '"' : "";
    if (isTodo(url)) {
      return "<span" + cls + ">" + esc(label) + (url ? " " + t(url) : "") + "</span>";
    }
    var ext = isExternal(url) ? ' target="_blank" rel="noopener"' : "";
    return "<a" + cls + ' href="' + esc(url) + '"' + ext + ">" + esc(label) + "</a>";
  }
  function list(items) {
    if (!items || !items.length) return "";
    return "<ul>" + items.map(function (i) { return "<li>" + t(i) + "</li>"; }).join("") + "</ul>";
  }
  function fill(name, html) {
    var el = document.querySelector('[data-render="' + name + '"]');
    if (el) el.innerHTML = html;
  }
  function initials(name) {
    return name.split(/\s+/).filter(Boolean).map(function (w) { return w[0]; })
      .filter(function (_, i, a) { return i === 0 || i === a.length - 1; }).join("").toUpperCase();
  }

  /* ---------- Hero / About ---------- */
  var p = S.person;
  var photo = isTodo(p.photo)
    ? '<div class="avatar avatar-placeholder" aria-hidden="true">' + esc(initials(p.name)) + "</div>"
    : '<img class="avatar" src="' + esc(p.photo) + '" alt="Photo of ' + esc(p.name) + '" width="168" height="168">';
  document.getElementById("about").innerHTML =
    photo +
    '<div class="hero-text">' +
      "<h1>" + esc(p.name) + "</h1>" +
      '<p class="hero-title">' + t(p.title) + "</p>" +
      (p.status ? '<p class="hero-status">' + t(p.status) + "</p>" : "") +
      p.bio.map(function (b) { return "<p>" + t(b) + "</p>"; }).join("") +
      '<p class="hero-links">' + p.links.map(function (l) { return link(l.label, l.url, "pill"); }).join("") + "</p>" +
    "</div>";

  /* ---------- Research interests ---------- */
  fill("interests", '<ul class="tags">' + S.researchInterests.map(function (i) {
    return "<li>" + t(i) + "</li>";
  }).join("") + "</ul>");

  /* ---------- Timeline-style entries (education, teaching, industry) ---------- */
  function entry(title, sub, dates, summary, details) {
    return '<article class="entry">' +
      '<div class="entry-head"><h3>' + t(title) + "</h3>" +
      '<span class="entry-dates">' + t(dates) + "</span></div>" +
      (sub ? '<p class="entry-sub">' + t(sub) + "</p>" : "") +
      (summary ? '<p class="entry-summary">' + t(summary) + "</p>" : "") +
      list(details) +
      "</article>";
  }
  function join(a, b) { return [a, b].filter(Boolean).join(", "); }

  fill("education", S.education.map(function (e) {
    return entry(e.degree, join(e.institution, e.location), e.dates, e.summary, e.details);
  }).join(""));
  fill("teaching", S.teaching.map(function (e) {
    return entry(e.role, join(e.organization, e.location), e.dates, e.summary, e.details);
  }).join(""));
  fill("industry", S.industry.map(function (e) {
    return entry(e.role, join(e.organization, e.location), e.dates, e.summary, e.details);
  }).join(""));

  /* ---------- Projects ---------- */
  fill("projects", '<div class="cards">' + S.projects.map(function (pr) {
    var img = isTodo(pr.image)
      ? '<div class="card-img card-img-placeholder" aria-hidden="true"><img src="assets/img/projects/placeholder.svg" alt="" width="640" height="360" loading="lazy"></div>'
      : '<div class="card-img"><img src="' + esc(pr.image) + '" alt="' + esc(pr.imageAlt || pr.title) + '" width="640" height="360" loading="lazy"></div>';
    var meta = [pr.type, pr.context, pr.date].filter(Boolean).map(t).join(" · ");
    return '<article class="card">' + img +
      '<div class="card-body">' +
        '<p class="card-meta">' + meta + "</p>" +
        "<h3>" + t(pr.title) + "</h3>" +
        "<p>" + t(pr.description) + "</p>" +
        (pr.tools && pr.tools.length ? '<ul class="tags tags-sm">' + pr.tools.map(function (x) { return "<li>" + t(x) + "</li>"; }).join("") + "</ul>" : "") +
        (pr.links && pr.links.length ? '<p class="card-links">' + pr.links.map(function (l) { return link(l.label, l.url); }).join("") + "</p>" : "") +
      "</div></article>";
  }).join("") + "</div>");

  /* ---------- Publications ---------- */
  if (!S.publications.length) {
    fill("publications", '<p class="muted">' + t(S.publicationsEmptyText || "In preparation.") + "</p>");
  } else {
    fill("publications", '<ol class="pubs">' + S.publications.map(function (pb) {
      return "<li>" + t(pb.authors) + '. <span class="pub-title">' + t(pb.title) + "</span>. " +
        "<em>" + t(pb.venue) + "</em>" + (pb.year ? ", " + t(pb.year) : "") + "." +
        (pb.status ? ' <span class="badge">' + t(pb.status) + "</span>" : "") +
        (pb.links && pb.links.length ? ' <span class="pub-links">' + pb.links.map(function (l) { return link(l.label, l.url); }).join("") + "</span>" : "") +
        "</li>";
    }).join("") + "</ol>");
  }

  /* ---------- Honors ---------- */
  fill("honors", '<ul class="honors">' + S.honors.map(function (h) {
    return "<li><span>" + t(h.title) + "</span>" + (h.year ? '<span class="entry-dates">' + t(h.year) + "</span>" : "") + "</li>";
  }).join("") + "</ul>");

  /* ---------- Skills ---------- */
  fill("skills", '<dl class="skills">' + S.skills.map(function (s) {
    return "<div><dt>" + t(s.category) + "</dt><dd>" + s.items.map(t).join('<span class="sep" aria-hidden="true"> · </span>') + "</dd></div>";
  }).join("") + "</dl>");

  /* ---------- CV ---------- */
  fill("cv",
    '<p><a class="button" href="' + esc(S.cv.file) + '" download>Download CV (PDF)</a>' +
    (S.cv.updated ? ' <span class="muted">Last updated: ' + t(S.cv.updated) + "</span>" : "") + "</p>");

  /* ---------- Contact ---------- */
  fill("contact",
    (S.contact.text ? "<p>" + t(S.contact.text) + "</p>" : "") +
    '<dl class="contact">' + S.contact.items.map(function (c) {
      var v = isTodo(c.url) ? t(c.value) : link(c.value, c.url);
      return "<div><dt>" + esc(c.label) + "</dt><dd>" + v + "</dd></div>";
    }).join("") + "</dl>");

  /* ---------- Footer ---------- */
  fill("footer", "© " + new Date().getFullYear() + " " + esc(p.name) +
    (S.lastUpdated ? ' · Last updated ' + t(S.lastUpdated) : ""));

  /* ---------- Theme toggle ---------- */
  var root = document.documentElement;
  var mq = window.matchMedia("(prefers-color-scheme: dark)");
  function currentTheme() { return root.getAttribute("data-theme") || (mq.matches ? "dark" : "light"); }
  document.querySelector(".theme-toggle").addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
  });

  // The content was just inserted, so jump to the #section in the URL again.
  if (location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
  }
})();
