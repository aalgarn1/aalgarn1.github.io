<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ali Algarni — Information Systems, King Khalid University</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root{
    --ink:#182234;
    --ink-soft:#3b4456;
    --paper:#F2EFE7;
    --paper-raised:#FAF8F2;
    --ochre:#A9702B;
    --ochre-deep:#7E5220;
    --sage:#57705F;
    --line:#D8D2C1;
    --line-strong:#C2BBA5;
    --max:1100px;
  }
  *{box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{
    margin:0;
    background:var(--paper);
    color:var(--ink);
    font-family:'IBM Plex Sans', sans-serif;
    font-size:16px;
    line-height:1.65;
    -webkit-font-smoothing:antialiased;
  }
  h1,h2,h3,.serif{
    font-family:'Source Serif 4', serif;
    font-weight:500;
    color:var(--ink);
    margin:0;
  }
  a{color:var(--ochre-deep); text-decoration-color: var(--line-strong); text-underline-offset:3px;}
  a:hover{color:var(--ochre);}
  .wrap{
    max-width:var(--max);
    margin:0 auto;
    display:grid;
    grid-template-columns:260px 1fr;
    gap:0;
    min-height:100vh;
  }

  /* ---------- Sidebar ---------- */
  .sidebar{
    border-right:1px solid var(--line);
    padding:3.5rem 2rem 2rem 0;
    position:sticky;
    top:0;
    align-self:start;
    height:100vh;
    overflow-y:auto;
  }
  .sidebar .name{
    font-size:1.7rem;
    line-height:1.25;
    margin-bottom:.35rem;
  }
  .sidebar .role{
    font-size:.9rem;
    color:var(--ink-soft);
    margin-bottom:1.75rem;
    max-width:22ch;
  }
  nav.side-nav{
    display:flex;
    flex-direction:column;
    gap:.65rem;
    margin-bottom:2.5rem;
    font-size:.92rem;
  }
  nav.side-nav a{
    color:var(--ink-soft);
    text-decoration:none;
    border-left:2px solid transparent;
    padding-left:.7rem;
  }
  nav.side-nav a:hover{color:var(--ink); border-left-color:var(--ochre);}
  .side-contact{
    font-size:.85rem;
    color:var(--ink-soft);
    display:flex;
    flex-direction:column;
    gap:.4rem;
  }
  .side-contact a{text-decoration:none;}
  .side-tag{
    display:inline-block;
    margin-top:2rem;
    font-size:.75rem;
    letter-spacing:.02em;
    color:var(--sage);
    border:1px solid var(--line-strong);
    padding:.35rem .6rem;
    border-radius:3px;
  }

  /* ---------- Main content ---------- */
  main{padding:3.5rem 2.5rem 5rem 3rem;}
  section{margin-bottom:4.5rem; scroll-margin-top:2rem;}
  .eyebrow{
    font-size:.78rem;
    color:var(--sage);
    margin-bottom:.6rem;
  }
  h2.section-title{
    font-size:1.5rem;
    margin-bottom:1.3rem;
    padding-bottom:.6rem;
    border-bottom:1px solid var(--line);
  }

  /* Hero */
  .hero p.lede{
    font-size:1.2rem;
    line-height:1.6;
    max-width:58ch;
    color:var(--ink-soft);
  }
  .hero p.lede strong{color:var(--ink); font-weight:600;}

  /* Focus areas — ledger rows */
  .focus-row{
    display:grid;
    grid-template-columns:180px 1fr;
    gap:1.5rem;
    padding:1.1rem 0;
    border-bottom:1px solid var(--line);
    align-items:start;
  }
  .focus-row:last-child{border-bottom:none;}
  .focus-row .label{
    font-family:'Source Serif 4', serif;
    font-size:1.02rem;
    color:var(--ink);
  }
  .focus-row .desc{color:var(--ink-soft); font-size:.95rem;}

  /* Work / selected engagements */
  .work-item{
    display:flex;
    gap:1.2rem;
    padding:1rem 0;
    border-bottom:1px solid var(--line);
  }
  .work-item:last-child{border-bottom:none;}
  .work-year{
    width:64px;
    flex-shrink:0;
    color:var(--sage);
    font-size:.85rem;
    padding-top:.15rem;
  }
  .work-body .title{font-size:1rem; margin-bottom:.2rem;}
  .work-body .meta{font-size:.85rem; color:var(--ink-soft);}

  /* Affiliations */
  .aff-list{
    display:flex;
    flex-direction:column;
    gap:.9rem;
  }
  .aff-item{
    display:grid;
    grid-template-columns:1fr;
    gap:.15rem;
  }
  .aff-item .org{font-size:.98rem; color:var(--ink);}
  .aff-item .note{font-size:.85rem; color:var(--ink-soft);}

  /* Contact card */
  .contact-block{
    background:var(--paper-raised);
    border:1px solid var(--line);
    padding:1.75rem 2rem;
    max-width:46ch;
  }
  .contact-block p{margin:.3rem 0; font-size:.95rem;}

  footer{
    padding:2rem 2.5rem 3rem 3rem;
    font-size:.8rem;
    color:var(--ink-soft);
    border-top:1px solid var(--line);
  }

  @media (max-width:820px){
    .wrap{grid-template-columns:1fr;}
    .sidebar{
      position:relative;
      height:auto;
      border-right:none;
      border-bottom:1px solid var(--line);
      padding:2.5rem 2rem 2rem;
    }
    main{padding:2.5rem 2rem 4rem;}
    .focus-row{grid-template-columns:1fr; gap:.4rem;}
  }
</style>
</head>
<body>

<div class="wrap">
  <aside class="sidebar">
    <div class="name serif">Ali Algarni</div>
    <div class="role">Faculty, Department of Information Systems<br>King Khalid University</div>

    <nav class="side-nav">
      <a href="#about">About</a>
      <a href="#focus">Research focus</a>
      <a href="#work">Selected work</a>
      <a href="#affiliations">Affiliations</a>
      <a href="#contact">Contact</a>
    </nav>

    <div class="side-contact">
      <a href="mailto:akafeer@kku.edu.sa">akafeer@kku.edu.sa</a>
      <span>Abha, Saudi Arabia</span>
    </div>

    <span class="side-tag">AI ethics &amp; health informatics</span>
  </aside>

  <main>
    <section class="hero" id="about">
      <p class="eyebrow">Information systems — King Khalid University</p>
      <h1 style="font-size:2.1rem; margin-bottom:1.1rem;">Ali Algarni</h1>
      <p class="lede">
        I work at the intersection of <strong>AI ethics</strong>, <strong>human-centered computing</strong>,
        and <strong>health informatics</strong> — studying how intelligent systems can be governed responsibly
        as they enter clinical and public-sector settings. Much of my current work sits alongside Saudi Arabia's
        Vision 2030 and the Health Sector Transformation Program, looking at what ethical, well-governed
        digital transformation actually requires in practice.
      </p>
    </section>

    <section id="focus">
      <h2 class="section-title serif">Research focus</h2>

      <div class="focus-row">
        <div class="label">AI ethics &amp; governance</div>
        <div class="desc">Frameworks for assessing and governing AI systems responsibly — impact assessment, accountability, and stewardship models suited to real institutional constraints.</div>
      </div>
      <div class="focus-row">
        <div class="label">Health informatics</div>
        <div class="desc">How AI and digital systems support clinical and public health decision-making, with attention to safety, validation, and human oversight.</div>
      </div>
      <div class="focus-row">
        <div class="label">Human-centered computing</div>
        <div class="desc">Designing systems around the people who use them — clinicians, administrators, and patients — rather than around the technology alone.</div>
      </div>
      <div class="focus-row">
        <div class="label">Digital transformation</div>
        <div class="desc">Policy and organizational change under Saudi Arabia's Vision 2030, including the Health Sector Transformation Program.</div>
      </div>
    </section>

    <section id="work">
      <h2 class="section-title serif">Selected work</h2>

      <div class="work-item">
        <div class="work-year">2025</div>
        <div class="work-body">
          <div class="title">Operationalizing global AI ethics guidance in national health systems</div>
          <div class="meta">Conference paper — policy areas, readiness assessment, and a national case study</div>
        </div>
      </div>
      <div class="work-item">
        <div class="work-year">2025</div>
        <div class="work-body">
          <div class="title">A framework for patient-centered intelligence in clinical AI design</div>
          <div class="meta">Research paper — human-centered principles for AI in care delivery</div>
        </div>
      </div>
      <div class="work-item">
        <div class="work-year">2024</div>
        <div class="work-body">
          <div class="title">Digital twins for healthcare systems</div>
          <div class="meta">Research paper — modeling and simulation for health service delivery</div>
        </div>
      </div>
      <div class="work-item">
        <div class="work-year">—</div>
        <div class="work-body">
          <div class="title">Add your next publication or project here</div>
          <div class="meta">Placeholder — replace with title, venue, and year</div>
        </div>
      </div>
    </section>

    <section id="affiliations">
      <h2 class="section-title serif">Affiliations</h2>
      <div class="aff-list">
        <div class="aff-item">
          <div class="org">Department of Information Systems, King Khalid University</div>
          <div class="note">Faculty member</div>
        </div>
        <div class="aff-item">
          <div class="org">Center for Artificial Intelligence, King Khalid University</div>
          <div class="note">Affiliated researcher</div>
        </div>
      </div>
    </section>

    <section id="contact">
      <h2 class="section-title serif">Contact</h2>
      <div class="contact-block">
        <p><strong>Email</strong><br><a href="mailto:akafeer@kku.edu.sa">akafeer@kku.edu.sa</a></p>
        <p><strong>Institution</strong><br>King Khalid University, Abha, Saudi Arabia</p>
      </div>
    </section>
  </main>
</div>

<footer>
  Ali Algarni — Department of Information Systems, King Khalid University.
</footer>

</body>
</html>
