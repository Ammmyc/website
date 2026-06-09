# RCMH Lab Website

Jekyll site for the Relational and Cultural Mental Health (RCMH) lab at HKU.

**Live site:** [https://Ammmyc.github.io/website/](https://Ammmyc.github.io/website/)

---

## How to change information on the website

Most page content lives in the **`_data/`** folder. Each file is YAML: edit the text, save, and refresh the browser. You usually do **not** need to restart the server for `_data` changes (unlike `_config.yml`).

You can also check the process following this link:
https://drive.google.com/file/d/1tha_oi4jkS19EU8XPXvMW9kaRPv0aNEt/view?usp=sharing

### Quick map: file → page

| Data file | What it controls | Where it appears |
|-----------|------------------|------------------|
| `team.yml` | Team members (except Amy Cheung) | [Team](/website/team/) page cards and “Read more” modal |
| `projects.yml` | Research projects list | [Projects](/website/projects/) page cards; links to project detail pages |
| `projects_overview.yml` | Intro paragraph above projects | Top of [Projects](/website/projects/) page |
| `publications.yml` | Publication list | [Publications](/website/publications/) page, [Home](/website/) publication scroller, publication detail pages |
| `news.yml` | News posts | [News](/website/news/) page |
| `contact-us.yml` | Header background images | [Contact Us](/website/contact-us/) page banner |

### Content **not** in `_data/`

Some items are edited elsewhere:

| What | Where to edit |
|------|----------------|
| Lab name, email, Google Scholar, CV links | `_config.yml` (`title`, `email`, `googlescholar_path`, `cv_path`, etc.) |
| Amy Cheung (head of lab) | `team.html` (card) and `team/Amy-Cheung.html` (full profile) |
| Navigation menu | `_includes/nav.html` |
| CLRI life-review page content | `_includes/clri-content.html` |
| Project/publication **detail** page layout | `project/*.html` and `publication/*.html` (they pull data from YAML) |

---

## `_data/` folder — every file and field

### `team.yml` — Team page

**Used on:** `team.html` — sections under “The Head” (Amy is hardcoded separately).

**Structure:**

```yaml
positions:
  - title: Post-doctoral Fellow          # Section heading on the Team page
    members:
      - name: Dr Erin Li                # Name on the card and in the modal
        information: >-                 # Short bio on the card; full text in “Read more” modal
          Multi-line biography text…
        email: amy.hn.cheung@hku.hk     # Stored in data (not currently shown on the page)
        image: assets/img/team/person_3.jpg   # Photo path (relative to site root)
```

| Field | Responsibility |
|-------|----------------|
| `positions` | List of role groups (e.g. Post-doctoral Fellow, PhD Candidates, MPhil Students). Each becomes a section with its own heading. |
| `title` | The section heading displayed above a group of members. |
| `members` | List of people in that role group. |
| `name` | Person’s display name on their card and in the profile modal. |
| `information` | Biography text. Shown as excerpt on the card and in full when “Read more” is clicked. Use `>-` for long multi-line text. |
| `email` | Contact email for the member (kept in data for reference; not rendered on the current Team page). |
| `image` | Path to the member’s photo under `assets/img/team/`. Upload a new image there and reference it here. |

**Adding a member:** Copy an existing `members` block, update the fields, add a photo to `assets/img/team/`, and place the entry under the right `title` section (or add a new `positions` entry for a new role).

---

### `projects.yml` — Projects page

**Used on:** `projects.html` (project cards). Clicking a card opens the page in `origin`.

**Structure (one project per list item):**

```yaml
- id: project-ai-dependency
  image: assets/img/bg/example.webp
  title: "Project title"
  pi: "Principal investigator"
  co_pis: ["Name One", "Name Two"]
  funder: "Funding body"
  amount: "HKD 150,000"
  years: "2025–2027"
  description: "Short summary shown on the Projects page card."
  link: "https://example.com"
  tag: ["AI", "longitudinal"]
  origin: "project/project1"
```

| Field | Responsibility |
|-------|----------------|
| `id` | Unique internal identifier for the project (for your reference; not shown on the page). |
| `image` | Thumbnail on the Projects page. Place images in `assets/img/bg/`. |
| `title` | Project name on the card. |
| `pi` | Principal investigator line (used on project detail pages). |
| `co_pis` | List of co-investigators (optional). |
| `funder` | Funding organisation. |
| `amount` | Grant amount (optional; can be left as `""`). |
| `years` | Project duration (optional). |
| `description` | Short text on the Projects listing card. |
| `link` | External project URL (optional). |
| `tag` | Topic labels for the project (used for filtering/search where implemented). |
| `origin` | Path to the detail page, **without** `.html`. Examples: `project/project1` or `clri-life-review` for the CLRI page. |
| `grant_code` | *(Optional)* Grant reference code, if applicable. |
| `map_collaborations` | *(Optional)* List of countries/regions for collaboration mapping on a detail page. |

**Adding a project:** Add a new YAML block, upload an image to `assets/img/bg/`, set `origin` to match an existing or new detail page under `project/`.

---

### `projects_overview.yml` — Projects intro text

**Used on:** `projects.html` — paragraph below the “Projects” heading.

| Field | Responsibility |
|-------|----------------|
| `overview` | Multi-line intro describing the lab’s project portfolio. Use `\|` for a paragraph that keeps line breaks, or `>-` for folded text. |

---

### `publications.yml` — Publications

**Used on:** `publications.html` (full list), `index.html` (home page scroller), and each `publication/publicationN.html` detail page (matched by `number`).

**Structure (one publication per list item):**

```yaml
- image: assets/img/bg/example.webp
  title: "Paper title"
  reference: "#pub-1"
  number: 1
  tags: ["depression", "adolescents"]
  authors: "Author, A., & Cheung, H. N.*"
  journal: "Journal Name"
  link: "https://doi.org/..."
  origin: "publication/publication1"
  abstract: "Short summary for listings."
  acknowledgements: ""
```

| Field | Responsibility |
|-------|----------------|
| `image` | Thumbnail on listing cards. Images go in `assets/img/bg/`. |
| `title` | Publication title. |
| `reference` | HTML anchor id (e.g. `#pub-1`) for in-page links on the Publications page. |
| `number` | Display order number. Higher numbers sort toward the top. Must match the detail page (e.g. `publication1.html` uses `number: 1`). |
| `tags` | Keywords shown as tags and used for filtering on the Publications page. |
| `authors` | Author list as it should appear on the site. |
| `journal` | Journal or venue name. |
| `link` | DOI or external URL. Leave as `""` if none. The listing shows a “URL” link when set. |
| `origin` | Path to the detail page without `.html` (e.g. `publication/publication1`). |
| `abstract` | Short description on cards and the home page scroller. |
| `acknowledgements` | Optional acknowledgements text on the detail page. |

**Adding a publication:** Add a YAML entry with the next `number`, create or reuse `publication/publicationN.html`, and keep `number` in sync between the YAML and the detail page.

---

### `news.yml` — News page

**Used on:** `news.html` — each entry is one news card.

```yaml
- title: We're Hiring
  image: https://images.pexels.com/photos/3127883/pexels-photo-3127883.jpeg
  description: |
    Multi-line news text (not currently shown on the page layout).
  link: somelink
  number: "1"
  source: HKU SWSA
  authors: Amy Cheung
  date: "15.12.2025"
```

| Field | Responsibility |
|-------|----------------|
| `title` | Headline on the news card. |
| `image` | Photo on the right side of the card. Can be a full URL or a path under `assets/img/bg/`. |
| `description` | Body text (stored in data; the current News template does not display this field). |
| `link` | URL for the “URL” link on the card. |
| `number` | Display number on the card (shown as a large figure). |
| `source` | Source label (shown where the journal line would be on publications). |
| `authors` | Author or byline line under the title. |
| `date` | Date string (stored in data; not currently shown on the News page template). |

---

### `contact-us.yml` — Contact page backgrounds

**Used on:** `contact-us.html` — rotating/header background collage behind “Contact Us”.

```yaml
- class: bg1
  image: assets/img/contact-us/img1.jpg
```

| Field | Responsibility |
|-------|----------------|
| `class` | CSS class (`bg1`, `bg2`, `bg3`, `bg4`) that controls position/size of the image in the header layout. |
| `image` | Path to the background image under `assets/img/contact-us/`. |

**Changing images:** Replace files in `assets/img/contact-us/` or add entries with the same `class` names the stylesheet expects.

---

## Local development

Requires Ruby and Bundler.

```bash
bundle install
bundle exec jekyll serve
```

Open **http://127.0.0.1:4000/website/** — include the `/website/` path (`baseurl` in `_config.yml`).

If port 4000 is busy:

```bash
bundle exec jekyll serve --port 4001
```

Then open `http://127.0.0.1:4001/website/`.

After changing `_config.yml`, restart the Jekyll server.

## Project structure

| Path | Purpose |
|------|---------|
| `_config.yml` | Site-wide settings (`baseurl`, `url`, contact links) |
| `_data/` | YAML content — main editable content (see above) |
| `_includes/` | Reusable HTML (nav, footer, CLRI sections) |
| `_layouts/` | Page layouts |
| `_sass/` | Stylesheets |
| `assets/` | Images, CSS, JavaScript |
| `team/` | Individual team member pages |
| `project/`, `publication/` | Detail pages linked from `_data` entries |

## Deployment

The site is published via GitHub Pages on the `gh-pages` branch to `Ammmyc.github.io/website`.

```bash
git push origin gh-pages
```

## Note for maintainers

This `README.md` is excluded from the Jekyll build in `_config.yml`, so it appears on GitHub only and is not served as a website page.
