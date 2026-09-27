<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ali Algarni</title>
  <meta name="description" content="Ali Algarni is a faculty member in Information Systems at King Khalid University, working on AI ethics, human-centered computing and health informatics.">
  <link rel="icon" href="images/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="page">

    <!-- ========== LEFT: portrait + events ========== -->
    <aside class="col-left">
      <a id="portraitLink" class="portrait"><img id="portrait" alt=""></a>
      <h1 class="name" id="name"></h1>
      <p class="tagline" id="tagline"></p>
      <p class="links" id="links"></p>

      <h2><a href="#events">events</a></h2>
      <ul class="events" id="events"></ul>
    </aside>

    <!-- ========== CENTRE: project tiles ========== -->
    <main class="col-main">
      <div class="tiles" id="tiles"></div>
      <section class="faq-panels" id="faqPanels"></section>
    </main>

    <!-- ========== RIGHT: show & tell + faq ========== -->
    <aside class="col-right">
      <h2><a href="#news">show &amp; tell</a></h2>
      <ul class="news" id="news"></ul>

      <h3><a href="#faqPanels">faq</a></h3>
      <ul class="faq" id="faq"></ul>

      <h4 class="office">office hours</h4>
      <p class="office-body" id="office"></p>
    </aside>
  </div>

  <footer class="footer" id="footer"></footer>

  <!-- lightbox for the portrait -->
  <div class="lightbox" id="lightbox" hidden><img id="lightboxImg" alt=""></div>

  <script src="data.js"></script>
  <script src="main.js"></script>
</body>
</html>
