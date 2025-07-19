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
- `assets/scss`: Sass files for theming and styling.
- `static`: static web resources such as global images, fonts, or JavaScript files.

📌 If you intend to customize the theme, prefer overriding components using Hugo’s lookup order instead of editing the theme directly — this ensures smoother updates and better maintainability.

🔍 We’ve made the following customizations to tailor the theme to the needs of the Continuous Architecture project:

- **Homepage custom section**: added a custom section to the homepage to showcase upcoming or past **events**.
- **Custom content structure**: introduced the `manifesto` and `framework` folders in the content tree. This allows the homepage to include a **table of contents** with direct links to foundational materials from the Continuous Architecture approach.
- **Custom social sharing**: Removed the Fediverse link and added a LinkedIn link on the `manifesto`, `framework`, and `blog/single` pages.

Make sure your UI changes are applied consistently across both `french` and `english` versions, and follow accessibility and responsiveness best practices.

## Test and run locally

See the relevant section on [ReadMe](readme)

## Create a Pull Request

At this point, if your changes look good and tests are passing locally, you are ready to create a pull request.

## Merging a PR and shipping the web site (maintainers only)

A PR can only be merged into master by a maintainer if tests are successful. Upon merge, our release GitHub Actions will take over to generate static html files then copy them to a Amazon S3 bucket.
