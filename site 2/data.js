/* =====================================================================
   SITE CONTENT — edit this file only.
   Items marked TODO are placeholders; replace or delete them.
   Tile images: set image: "images/your-file.jpg" to use a real picture
   (4:3 works best). Leave it empty to get the auto-generated artwork.
   ===================================================================== */

const SITE = {
  name: "Ali Algarni",
  photo: "images/ali.jpg",          // your portrait (portrait or square)
  photoLarge: "images/ali.jpg",     // opens when the portrait is clicked
  tagline: "Faculty member, Information Systems · King Khalid University · Center for Artificial Intelligence",

  /* ---- left column: dated events (newest first) ---- */
  events: [
    // TODO: replace these examples with real talks, meetings and visits
    { date: "Oct 26", place: "Abha",   title: "Center for AI seminar (example)", url: "#" },
    { date: "Sep 26", place: "KKU",    title: "HCI master's course begins",       url: "#" },
    { date: "Aug 26", place: "Online", title: "Conference talk (example)",       url: "#" }
  ],

  /* ---- centre: project tiles ---- */
  tiles: [
    { title: "Patient-Centered Intelligence", text: "A four-pillar framework for clinical AI that puts context, supported decisions, continuity and equity first.", url: "#", image: "", color: "#0f6e8c", glyph: "PCI" },
    { title: "Evaluating Patient-Centered AI", text: "PCET: a five-domain taxonomy for judging clinical AI beyond accuracy.", url: "#", image: "", color: "#2e7d32", glyph: "PCET" },
    { title: "AI Ethics in Practice", text: "Turning UNESCO's AI ethics recommendation into readiness and impact assessments for health governance.", url: "#", image: "", color: "#6a1b9a", glyph: "RAM·EIA" },
    { title: "Beyond Automation", text: "The ATC framework: AI as a catalyst of organizational change, and why algorithmic confidence matters.", url: "#", image: "", color: "#c62828", glyph: "ATC" },
    { title: "Digital Twins for Health", text: "A national adoption roadmap for healthcare digital twins aligned with Vision 2030.", url: "#", image: "", color: "#00838f", glyph: "DT" },
    { title: "Emerging Tech in TVET", text: "How AI, IoT, VR/AR and analytics can reshape technical and vocational training.", url: "#", image: "", color: "#ef6c00", glyph: "TVET" },
    { title: "Human–Computer Interaction", text: "My master's HCI course: survey papers, prototypes and technical semester projects.", url: "#faq-teaching", image: "", color: "#37474f", glyph: "HCI" },
    { title: "Center for Artificial Intelligence", text: "Research on trustworthy, human-centered AI at King Khalid University.", url: "https://www.kku.edu.sa/en", image: "", color: "#1565c0", glyph: "AI" },
    { title: "Vision 2030 & HSTP", text: "General frameworks, tested through Saudi health-sector transformation case studies.", url: "#", image: "", color: "#1b5e20", glyph: "2030" }
  ],

  /* ---- right column: short news items ---- */
  showAndTell: [
    { text: "New framework paper: Intelligent Care by Design (ACM).", url: "#" },
    { text: "Working on a scoping review of how patient-centered AI is evaluated.", url: "#" },
    { text: "Prospective graduate students interested in human-centered AI: see the FAQ.", url: "#faq-prospective" }
  ],

  /* ---- right column: FAQ links (each opens a panel below the grid) ---- */
  faq: [
    { id: "faq-contact", label: "contact/meet", body: "Email is the best way to reach me: <a href=\"mailto:akafeer@kku.edu.sa\">akafeer@kku.edu.sa</a>. Please include a clear subject line." },
    { id: "faq-prospective", label: "prospective students", body: "I supervise graduate projects in AI ethics, human-centered computing and health informatics. Send a short note describing your interests and a paper you liked." },
    { id: "faq-collaborate", label: "collaborate", body: "I welcome collaborations on patient-centered AI, AI governance and digital transformation in the public and health sectors." },
    { id: "faq-teaching", label: "teaching", body: "Master's-level Human–Computer Interaction, with a survey-paper project and a technical semester project. Course materials are shared with enrolled students." },
    { id: "faq-cv", label: "CV", body: "Download my CV: <a href=\"cv.pdf\">cv.pdf</a> (TODO: add the file to the repository)." }
  ],

  officeHours: { when: "TODO: e.g. Sun/Tue 10–11", where: "TODO: building / room", url: "#" },

  links: [
    { label: "email",   url: "mailto:akafeer@kku.edu.sa" },
    { label: "scholar", url: "#" },   // TODO
    { label: "orcid",   url: "#" },   // TODO
    { label: "github",  url: "#" }    // TODO
  ],

  footer: "Ali Algarni · Department of Information Systems · King Khalid University, Abha, Saudi Arabia"
};
