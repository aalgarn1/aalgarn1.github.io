/* =====================================================================
   SITE CONTENT — edit this file only. Everything on the page is built
   from the objects below, so you never need to touch index.html.

   Items marked  TODO  are placeholders — replace them before publishing.
   DOI rule: leave doi: "" until a real, registered DOI exists; the DOI
   button is hidden automatically when the field is empty.
   ===================================================================== */

const SITE = {
  name: "Ali Algarni",
  shortName: "Ali Algarni",
  role: "Faculty Member, Department of Information Systems",
  affiliation: "King Khalid University 🇸🇦",
  affiliationUrl: "https://www.kku.edu.sa/en",
  photo: "assets/profile.jpg",              // put your photo here (square, ≥ 400×400)
  description: "Personal academic website of Ali Algarni — AI ethics, human-centered computing, health informatics and digital transformation.",

  links: [
    { icon: "email",   label: "Email",          url: "mailto:akafeer@kku.edu.sa" },
    { icon: "scholar", label: "Google Scholar", url: "#" },   // TODO: your Scholar profile URL
    { icon: "orcid",   label: "ORCID",          url: "#" },   // TODO: https://orcid.org/xxxx-xxxx-xxxx-xxxx
    { icon: "linkedin",label: "LinkedIn",       url: "#" },   // TODO
    { icon: "github",  label: "GitHub",         url: "#" }    // TODO: https://github.com/<username>
  ],

  about: [
    "I am a faculty member in the Department of Information Systems at King Khalid University (KKU) in Abha, Saudi Arabia, and I am affiliated with the university's Center for Artificial Intelligence.",
    "My research sits where artificial intelligence meets people and institutions. I work on AI ethics and governance, human-centered computing, health informatics, and digital transformation — asking how intelligent systems can be designed, evaluated and governed so that they genuinely serve the people who rely on them.",
    "Much of my work is grounded in Saudi Vision 2030 and the Health Sector Transformation Program (HSTP). I develop general frameworks — such as Patient-Centered Intelligence for clinical AI — and test their fit through regional case studies, so the contributions travel beyond a single national context."
  ],

  interests: [
    "AI Ethics & Governance",
    "Human-Centered Computing",
    "Health Informatics",
    "Patient-Centered AI",
    "Digital Transformation",
    "Saudi Vision 2030 & HSTP"
  ],

  education: [
    // TODO: replace with your real degrees
    { degree: "PhD in [Field]",      year: "Year", institution: "[University]" },
    { degree: "MSc in [Field]",      year: "Year", institution: "[University]" },
    { degree: "BSc in [Field]",      year: "Year", institution: "[University]" }
  ],

  teaching: {
    intro: "I teach in the Department of Information Systems at King Khalid University. In my master's-level Human–Computer Interaction course, students write a survey (literature-review) paper and build a technical semester project. I have teaching experience in:",
    items: [
      "Human–Computer Interaction (master's level)",
      "Human-centered design and evaluation",
      "Research methods and literature reviews",
      "Graduate project supervision"
      // TODO: add further courses
    ],
    note: ""  // optional closing line, e.g. a teaching qualification
  },

  /* ---------------------------------------------------------------
     PUBLICATIONS
     status: shown as a badge (e.g. "Published", "Under review",
             "In preparation"). Keep it honest and current.
     featured: true  → appears in the "Featured Publications" cards.
     --------------------------------------------------------------- */
  publications: [
    {
      id: "algarni-pci",
      title: "Intelligent Care by Design: A Patient-Centered Intelligence Framework with a Saudi Health Sector Transformation Case Study",
      short: "Intelligent Care by Design",
      authors: "Ali Algarni",
      year: 2026, month: "",
      venue: "ACM conference paper",
      type: "inproceedings",
      status: "Conference paper",
      doi: "", pdf: "", url: "",
      featured: true,
      tags: ["Patient-Centered AI", "Health Informatics", "Human-Centered AI", "Saudi Vision 2030"],
      abstract: "Introduces Patient-Centered Intelligence (PCI), a four-pillar framework for clinical AI built on contextual understanding, supported decision-making, longitudinal care continuity and equity-aware personalization. A case study of Saudi Arabia's Health Sector Transformation Program illustrates how the framework can guide the design of intelligent care services."
    },
    {
      id: "algarni-pcet",
      title: "How Is Patient-Centered AI Evaluated? A Scoping Review and Taxonomy of Metrics in Clinical AI Systems",
      short: "How Is Patient-Centered AI Evaluated?",
      authors: "Ali Algarni",
      year: 2026, month: "",
      venue: "Target: ACM CHI 2027",
      type: "inproceedings",
      status: "In preparation",
      doi: "", pdf: "", url: "",
      featured: true,
      tags: ["Patient-Centered AI", "Evaluation", "Scoping Review", "Health Informatics"],
      abstract: "A scoping review of how clinical AI systems are evaluated, synthesised into the Patient-Centered AI Evaluation Taxonomy (PCET): five domains spanning technical performance, clinical utility, patient experience, equity and fairness, and governance and accountability — mapped back to the PCI pillars as concrete evaluation criteria."
    },
    {
      id: "algarni-atc",
      title: "Beyond Automation: Artificial Intelligence as a Transformative Force in Organizational Change — A Conceptual Framework for the Digital Era",
      short: "Beyond Automation",
      authors: "Ali Algarni",
      year: 2026, month: "",
      venue: "Journal of Organizational Change Management",
      type: "article",
      status: "Manuscript",
      doi: "", pdf: "", url: "",
      featured: true,
      tags: ["Digital Transformation", "Organizational Change", "Human–AI Collaboration"],
      abstract: "Proposes the AI Transformation Catalyst (ATC) framework, which treats AI as a catalyst rather than a mere automation tool in organizational change, and extends ADKAR with Algorithmic Confidence — an individual's trust in AI outputs. An illustrative case draws on a meta-study of digital transformation strategies across 31 Saudi government entities."
    },
    {
      id: "algarni-unesco",
      title: "Operationalizing UNESCO's Recommendation on the Ethics of AI in Health Governance: A Saudi Case Study",   // TODO: confirm final title
      short: "Operationalizing UNESCO AI Ethics",
      authors: "Ali Algarni",
      year: 2026, month: "",
      venue: "Journal of Artificial Intelligence for Sustainable Development",
      type: "article",
      status: "Under review",   // TODO: confirm status
      doi: "", pdf: "", url: "",
      featured: true,
      tags: ["AI Ethics", "AI Governance", "Health Informatics", "Saudi Vision 2030"],
      abstract: "Shows how UNESCO's 2021 Recommendation on the Ethics of AI can move from principle to practice using its Readiness Assessment Methodology (RAM) and Ethical Impact Assessment (EIA), with an illustrative analysis of the governance roles of SDAIA, DGA, SFDA and NDMO in Saudi health contexts."
    },
    {
      id: "algarni-dt",
      title: "Digital Twins in Healthcare: Opportunities and a National Adoption Roadmap Aligned with Saudi Vision 2030",   // TODO: confirm final title
      short: "Digital Twins in Healthcare",
      authors: "Ali Algarni",
      year: 2026, month: "",
      venue: "Target: Journal of Biomedical Informatics",
      type: "article",
      status: "In preparation",
      doi: "", pdf: "", url: "",
      featured: false,
      tags: ["Digital Twins", "Health Informatics", "Saudi Vision 2030"],
      abstract: "Reviews the use of digital twins across healthcare and proposes a three-phase national adoption roadmap aligned with Saudi Vision 2030."
    }
  ],

  footer: "© {year} Ali Algarni · Department of Information Systems, King Khalid University"
};
