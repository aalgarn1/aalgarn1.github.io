# Ali Algarni — Academic Website Templates

Two ready-to-publish GitHub Pages sites in plain HTML, CSS and JavaScript. You don't need a build step or any frameworks.

| Folder | Style | Best for |
|---|---|---|
| `site-1-modern/` | Single-page profile modeled on thomasgultzow.com: sticky navbar, round portrait, About / Interests / Education, Teaching, Featured publication cards, filterable publication list, topic cloud, BibTeX **Cite** pop-up, site search (press `/`), and light/dark/auto theme | A full academic homepage |
| `site-2-classic/` | Three-column layout modeled on Scott Klemmer's page: portrait and events on the left, a grid of project tiles in the centre, and show & tell, FAQ and office hours on the right | A compact, visual "front door" |

## 1. Edit your content
In each site, edit only **`data.js`**. It holds every piece of text, link and publication.
Search it for `TODO` and replace those placeholders (education, Scholar/ORCID/LinkedIn/GitHub links, office hours, events).

* **Photo:** For site 1, save it as `assets/profile.jpg` (square). For site 2, save it as `images/ali.jpg`. If no photo is there, the site shows initials instead.
* **Publications (site 1):** Each entry has `status`, `doi`, `pdf` and `featured`. Only fill in `doi` once the DOI is real and registered. The DOI button stays hidden while the field is empty.
* **Tile images (site 2):** Set `image: "images/xyz.jpg"` on a tile to use a real picture (4:3). If you leave it empty, the site draws coloured artwork for that tile.

## 2. Publish on GitHub Pages
1. Create a repository named **`<your-username>.github.io`**. It must be public, or private on a paid plan.
2. Copy the *contents* of the site folder you chose to the root of that repository. That's `index.html`, `style.css`, `main.js`, `data.js`, `.nojekyll` and the `assets/` or `images/` folder.
   * **Web:** Go to **Add file → Upload files** and drag the files in.
   * **Command line:**
     ```bash
     git clone https://github.com/<username>/<username>.github.io
     cp -r site-1-modern/. <username>.github.io/
     cd <username>.github.io && git add . && git commit -m "Publish site" && git push
     ```
3. Open **Settings → Pages** and set **Source: Deploy from a branch** with **Branch: main / (root)**.
4. After about a minute, the site is live at `https://<username>.github.io`.

**Using both sites:** Put one site in the root. Put the other in a subfolder (for example `classic/`), and it will be served at `https://<username>.github.io/classic/`.

## 3. Preview locally
Double-click `index.html`, or run `python3 -m http.server` inside the folder and open http://localhost:8000.

## Optional
* **Custom domain:** Add a `CNAME` file containing your domain, then set up DNS as described in GitHub's Pages docs.
* **Arabic version:** Copy the folder, set `<html lang="ar" dir="rtl">`, and translate `data.js`.
