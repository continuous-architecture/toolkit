# Contributing

Thanks for your interest in contributing! We outline here how we expect contributions to happen.

WARNING: Note that contributions can only be made by individuals representing themselves, not by a company.

## Overall contribution workflow

1. Start by searching the [issue tracker](https://github.com/michelin/Continuous-Architecture-Toolkit/issues) to see if your contribution, be it a problem or a suggestion for an enhancement, was brought up before.
2. If nothing satisfying comes up, feel free to file a new issue. Provide as many details about your idea, problem, or suggestion as possible. Once a conversation with one or more maintainers has taken place, it should become clear when it is appropriate to suggest a change via a pull request.
3. Create a branch with an explicit name and add materials on a topic of your choice. Then submit a pull request outlining your changes so maintainers can review what you've added and work with you to polish it.

## Implement your fix or feature

### Adding / Modifying content

The [Continuous Architecture website](https://continuous-architecture.org) is built using the **Hugo** static site generator. Content is organized under the `content` folder, which supports multilingual structure via two main subfolders: `french` and `english`.

Each of these folders contains the following sections:

- `authors`: profiles of the project's maintainers and contributors.
- `blog`: blog posts that support and illustrate the project.
- `framework`: descriptions of the Continuous Architecture framework.
- `glossary`: definitions of terms and concepts used across the site.
- `manifesto`: principles of the Continuous Architecture Manifesto.
- `organization`: presentation of the non-profit association supporting the project, its mission, and partner organizations.  
- `pages`: standalone pages such as the privacy policy or governance.
- `practices`: reusable kits and practices (e.g., ADRs, Team Topologies, Architecture Runway, etc.).
- `rituals`: rituals and ceremonies (e.g., architecture peer reviews, katas, readiness assessments).
- `roles`: promoted roles like Product Architect or Fullstack Architect.
- `section`: content related to events and external references.

Each content item is written in Markdown and uses TOML or YAML front matter for metadata.

> ⚠️ **Important:** When adding or updating content, please make sure to reflect the same content in both `french` and `english` folders to maintain consistency across languages. If a translation is not immediately available, consider adding a placeholder with a note indicating translation is pending.

### Assets and Static Resources

All static assets (images, JS, etc.) are stored in the `assets` folder. You can reference them using Hugo’s asset pipelines or shortcodes. Prefer storing images in a logical structure close to their related content to keep things organized and contextual.

### Changing the look and feel

The Continuous Architecture website uses the [**Hugoplate**](https://github.com/zeon-studio/hugoplate) theme, a customizable and modular theme for Hugo.

To modify the look and feel of the site:

- `layouts`: main layout templates used by the Hugoplate theme.
- `layouts/partials`: reusable partial templates.
- `assets`: Sass files for theming and styling, and images
- `static`: static web resources such as pdf, pptx and rtb.

📌 If you intend to customize the theme, prefer overriding components using Hugo’s lookup order instead of editing the theme directly — this ensures smoother updates and better maintainability.

🔍 We’ve made the following customizations to tailor the theme to the needs of the Continuous Architecture project:

- **Homepage custom section**: added a custom section to the homepage to showcase upcoming or past **events**.
- **Custom content structure**: introduced the `framework`, `manifesto`, `organization`, `practices`, `rituals` and `roles` folders in the content tree. This allows the homepage to include a **table of contents** with direct links to foundational materials from the Continuous Architecture approach.
- **Custom social sharing**: Removed the Fediverse link and added a LinkedIn link on the `manifesto`, `framework`, and `blog/single` pages.
- **Custom analytics**: Add `layout/partials/matomo.html` file, add short lines of code in `layout/_default/baseof.html`.

Make sure your UI changes are applied consistently across both `french` and `english` versions, and follow accessibility and responsiveness best practices.

## Test and run locally

See the relevant section on [readme](./readme.md)

## Branch Policy

To keep the repository organized and maintain a clear contribution flow, we follow a simple branching strategy:

### Branch naming

- Use **feature branches** for new additions and improvements:  feature/\<short-description>

_Example:_ `feature/add-organization-page`

- Use **fix branches** for bug corrections:  fix/\<short-description>

_Example:_ `fix/navigation-links`

- Use **docs branches** for documentation-only updates:  
docs/\<short-description>

_Example:_ `docs/update-contributing-guide`

> ✅ Use lowercase letters, hyphens instead of spaces, and short, descriptive names.

### About personal branches

We do **not** use branches named after individual contributors (e.g. `jean/feature-x` or `john/fix-bug`).  
Each contribution is automatically linked to its author through GitHub pull requests, so adding personal prefixes is unnecessary.  

This approach keeps the repository clean, avoids redundant branch names, and makes collaboration easier between contributors working on similar topics.

If several contributors work on related changes, prefer using a **shared thematic branch** (e.g. `feature/i18n-updates`) rather than multiple personal ones.

### Main branches

- **`main`**  
Represents the **production-ready** branch.  
Only maintainers can merge into `main` after review and successful CI checks.  
Merges to `main` trigger the **automatic deployment** via GitHub Actions.

### Branch lifecycle

1. Create your branch from the latest version of `main`.  
2. Commit your changes following the [Conventional Commits](https://www.conventionalcommits.org/) convention.  
3. Open a Pull Request targeting `main` if appropriate.  
4. Once reviewed and approved, maintainers will handle the merge and deployment.

### Branch protection

To ensure quality and traceability:

- Direct pushes to `main` are **not allowed**.  
- At least **one reviewer approval** is required before merging.  
- All **CI checks must pass** before integration.

## Create a Pull Request

At this point, if your changes look good and tests are passing locally, you are ready to create a pull request.

## Merging a PR and shipping the web site (maintainers only)

A PR can only be merged into master by a maintainer if tests are successful. Upon merge, our Cloudfare workflow automatically builds the static HTML files and deploys them to an Amazon S3 bucket.
