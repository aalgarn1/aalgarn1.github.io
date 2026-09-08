<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ali Algarni</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root{
    --text:#212529;
    --muted:#6c757d;
    --link:#0645ad;
    --bg:#ffffff;
    --border:#e9ecef;
    --badge-bg:#f1f3f5;
  }
  *{box-sizing:border-box;}
  body{
    margin:0;
    background:var(--bg);
    color:var(--text);
    font-family:'Noto Sans', Arial, sans-serif;
    font-size:16px;
    line-height:1.7;
  }
  a{color:var(--link); text-decoration:none;}
  a:hover{text-decoration:underline;}
  .container{max-width:800px; margin:0 auto; padding:0 24px;}

  /* Nav */
  nav{
    border-bottom:1px solid var(--border);
    padding:18px 0;
  }
  nav .container{
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    row-gap:10px;
  }
  nav .brand{
    font-weight:700;
    font-size:1.05rem;
    color:var(--text);
    text-decoration:none;
  }
  nav ul{
    list-style:none;
    display:flex;
    gap:22px;
    margin:0;
    padding:0;
    flex-wrap:wrap;
  }
  nav ul a{
    color:var(--text);
    font-size:.92rem;
    font-weight:500;
  }
  nav ul a:hover{color:var(--link); text-decoration:none;}

  /* Intro */
  .intro{padding:40px 0 20px;}
  .intro h1{font-size:2rem; margin:0 0 4px;}
  .intro .affil{font-size:.95rem; color:var(--muted); margin-bottom:20px;}
  .intro-flex{
    display:flex;
    gap:32px;
    align-items:flex-start;
  }
  .intro-text{flex:1;}
  .intro-text p{margin:0 0 14px;}
  .avatar{
    width:150px;
    height:150px;
    border-radius:6px;
    background:#dee2e6;
    flex-shrink:0;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:2.4rem;
    font-weight:600;
    color:#868e96;
  }

  /* Sections */
  section{padding:20px 0 36px;}
  section h2{
    font-size:1.15rem;
    font-weight:700;
    border-bottom:1px solid var(--border);
    padding-bottom:8px;
    margin:0 0 18px;
  }

  /* News table */
  table.news{width:100%; border-collapse:collapse; font-size:.94rem;}
  table.news td{
    padding:8px 12px 8px 0;
    border-bottom:1px solid var(--border);
    vertical-align:top;
  }
  table.news td.date{
    white-space:nowrap;
    color:var(--muted);
    width:110px;
  }

  /* Publications */
  ol.pubs{list-style:none; margin:0; padding:0; counter-reset:pub;}
  ol.pubs li{
    counter-increment:pub;
    display:flex;
    gap:14px;
    padding:16px 0;
    border-bottom:1px solid var(--border);
  }
  ol.pubs li::before{
    content:counter(pub) ".";
    color:var(--muted);
    font-size:.9rem;
    width:18px;
    flex-shrink:0;
    padding-top:2px;
  }
  .pub-badge{
    display:inline-block;
    font-size:.72rem;
    font-weight:600;
    background:var(--badge-bg);
    color:var(--muted);
    padding:2px 8px;
    border-radius:3px;
    margin-bottom:6px;
  }
  .pub-title{font-weight:600; margin:0 0 4px;}
  .pub-authors{font-size:.9rem; color:var(--muted); margin:0 0 4px;}
  .pub-venue{font-size:.88rem; font-style:italic; color:var(--muted);}

  /* Contact / social */
  .social-row{
    display:flex;
    flex-wrap:wrap;
    gap:16px;
    font-size:.92rem;
    padding-top:6px;
  }

  footer{
    border-top:1px solid var(--border);
    padding:26px 0 40px;
    text-align:center;
    color:var(--muted);
    font-size:.85rem;
  }

  @media (max-width:560px){
    .intro-flex{flex-direction:column-reverse;}
    .avatar{width:110px; height:110px; font-size:1.8rem;}
  }
</style>
</head>
<body>

<nav>
  <div class="container">
    <a class="brand" href="#top">Ali Algarni</a>
    <ul>
      <li><a href="#top">About</a></li>
      <li><a href="#research">Research</a></li>
      <li><a href="#publications">Publications</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>

<div class="container">

  <div class="intro" id="top">
    <h1>Ali Algarni</h1>
    <div class="affil"><strong>Affiliations:</strong> Department of Information Systems, King Khalid University · Center for Artificial Intelligence, King Khalid University</div>

    <div class="intro-flex">
      <div class="intro-text">
        <p>
          I am a faculty member in the Department of Information Systems at
          <a href="#">King Khalid University</a>, Abha, Saudi Arabia, and an affiliated
          researcher with the university's Center for Artificial Intelligence.
        </p>
        <p>
          My research interests include AI ethics and governance, human-centered computing,
          health informatics, and digital transformation — with particular attention to
          Saudi Arabia's Vision 2030 and the Health Sector Transformation Program.
        </p>
        <p>
          I work in both Arabic and English, and I'm interested in how global ethical
          frameworks for AI translate into practice within national health and public systems.
        </p>
      </div>
      <div class="avatar">AA</div>
    </div>
  </div>

  <section id="news">
    <h2>News</h2>
    <table class="news">
      <tr>
        <td class="date">2025</td>
        <td>Working on a conference paper operationalizing the UNESCO Recommendation on the Ethics of AI for national health systems.</td>
      </tr>
      <tr>
        <td class="date">2025</td>
        <td>Developing a patient-centered intelligence framework for human-centered clinical AI design.</td>
      </tr>
      <tr>
        <td class="date">—</td>
        <td>Add your next update here.</td>
      </tr>
    </table>
  </section>

  <section id="research">
    <h2>Research</h2>
    <p style="margin:0 0 10px;">AI ethics and governance, health informatics, human-centered computing, and digital transformation policy.</p>
  </section>

  <section id="publications">
    <h2>Selected publications</h2>
    <ol class="pubs">
      <li>
        <div>
          <span class="pub-badge">Conference</span>
          <div class="pub-title">Operationalizing the UNESCO Recommendation on the Ethics of AI: a national health-system case study</div>
          <div class="pub-authors">Ali Algarni</div>
          <div class="pub-venue">In preparation, 2025</div>
        </div>
      </li>
      <li>
        <div>
          <span class="pub-badge">Journal</span>
          <div class="pub-title">Patient-centered intelligence: a framework for human-centered clinical AI design</div>
          <div class="pub-authors">Ali Algarni</div>
          <div class="pub-venue">In preparation, 2025</div>
        </div>
      </li>
      <li>
        <div>
          <span class="pub-badge">Journal</span>
          <div class="pub-title">Digital twins for healthcare systems</div>
          <div class="pub-authors">Ali Algarni</div>
          <div class="pub-venue">In preparation, 2024</div>
        </div>
      </li>
      <li>
        <div>
          <span class="pub-badge">—</span>
          <div class="pub-title">Add your next publication here</div>
          <div class="pub-authors">Placeholder — replace with authors, title, venue, and year</div>
          <div class="pub-venue"></div>
        </div>
      </li>
    </ol>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <p style="margin:0 0 10px;">Department of Information Systems, King Khalid University, Abha, Saudi Arabia</p>
    <div class="social-row">
      <a href="mailto:akafeer@kku.edu.sa">Email</a>
    </div>
  </section>

</div>

<footer>
  &copy; Ali Algarni.
</footer>

</body>
</html>
