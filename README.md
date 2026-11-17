# Farrell Habibie: portfolio and CVs

This repo holds my portfolio website and the LaTeX sources for my CVs.

## Website

`index.html`, `styles.css` and `script.js` are served by GitHub Pages at <https://farrellhrs.github.io/>. The CV behind the site's "Download CV" button is `assets/CV_Farrell_Habibie.pdf`, a copy of `cv/main-cv`.

## CVs

| Folder | What it is |
|---|---|
| `cv/main-cv/` | Full CV with every project and role |
| `cv/ml-2-page/` | 2-page CV for Machine Learning / AI Engineer roles |
| `cv/deloitte-itda/` | 2-page CV for Deloitte Indonesia, Analyst, IT Controls, AI, Data & Data Analytics. `main_submitted.tex` and the "(submitted)" PDF are the version sent with the application. |
| `cv/deloitte-owt/` | 2-page CV for Deloitte Indonesia, Graduate Analyst, Organization & Workforce Transformation |
| `cv/archive/` | Older CV versions, kept for their wording |

Each folder has a `main.tex`. Build it with:

```bash
latexmk -pdf main.tex
```
