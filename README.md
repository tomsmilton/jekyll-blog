# Jekyll Blog with Tufte Design

A beautiful Jekyll blog featuring Tufte-inspired typography, tag-based navigation, backlinks, and support for two content types (Essays and Anecdotes).

## Features

- **Tufte-style typography** with wide margins and elegant serif fonts
- **Two content types**: Essays (`_posts`) and Anecdotes (`_notes`)
- **Tag system** with dynamic tag cloud
- **Backlinks** showing which posts reference each other
- **Recent and Updated sections** on the homepage
- Responsive design
- GitHub Pages compatible

## Getting Started

### Prerequisites

- Ruby (2.7 or higher)
- RubyGems
- Bundler

### Installation

1. Install dependencies:
```bash
bundle install
```

2. Run the development server:
```bash
bundle exec jekyll serve
```

3. Open your browser to `http://localhost:4000`

The site will automatically rebuild when you make changes to files.

## Configuration

Edit `_config.yml` to customize:

- Site title and description
- Your name and email
- URL and baseurl (for deployment)
- Timezone

## Writing Content

### Essays

Create markdown files in `_posts/` with this naming format:
```
YYYY-MM-DD-title-slug.md
```

Front matter example:
```yaml
---
layout: post
title: "Your Essay Title"
date: 2026-01-01 12:00:00 -0500
tags: [tag1, tag2, tag3]
excerpt: "A short description of your essay"
---
```

### Anecdotes

Create markdown files in `_notes/` with the same naming format.

Front matter is the same as essays, but they'll be categorized as "anecdote" content type automatically.

### Updating Posts

To mark a post as updated, add an `updated` field to the front matter:
```yaml
updated: 2026-01-03 11:00:00 -0500
```

This will make it appear in the "Recently Updated" section on the homepage.

### Cross-linking

Link between posts using standard markdown links. The backlinks feature will automatically detect these and show them at the bottom of linked posts:

```markdown
See my [other post](/essays/post-slug) for more details.
```

## Customization

### Colors and Styling

The base Tufte styles are in `_sass/_tufte.scss`. You can add your custom overrides in `assets/css/main.scss`.

To match your existing site at tsmilton.com, add your custom CSS to the main.scss file.

### Sidenotes (Optional)

To add Tufte-style sidenotes, use this HTML in your markdown:

```html
<label for="sn-1" class="margin-toggle sidenote-number"></label>
<input type="checkbox" id="sn-1" class="margin-toggle"/>
<span class="sidenote">
  Your sidenote content goes here.
</span>
```

## Deployment

### GitHub Pages

1. Create a repository named `username.github.io` (or any name for project pages)
2. Update `_config.yml` with your GitHub Pages URL
3. Push your code to GitHub
4. Enable GitHub Pages in repository settings

### Netlify

1. Connect your Git repository to Netlify
2. Build command: `bundle exec jekyll build`
3. Publish directory: `_site`
4. Deploy!

## Project Structure

```
├── _config.yml          # Site configuration
├── _includes/           # Reusable components
│   ├── header.html
│   ├── footer.html
│   ├── backlinks.html
│   └── tag-cloud.html
├── _layouts/            # Page templates
│   ├── default.html
│   ├── post.html
│   ├── page.html
│   └── tag.html
├── _posts/              # Essays (blog posts)
├── _notes/              # Anecdotes (shorter content)
├── _sass/               # Stylesheets
│   ├── _tufte.scss
│   ├── _tags.scss
│   └── _layout.scss
├── assets/
│   └── css/
│       └── main.scss    # Main stylesheet (imports others)
├── index.html           # Homepage
├── essays.html          # Essays archive
├── anecdotes.html       # Anecdotes archive
└── tags.html            # Tag listing page
```

## License

This project structure and code is open source. The Tufte CSS portions are based on the work by Dave Liepmann.
