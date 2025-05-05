# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build/Lint/Test Commands
- Serve locally: Use a simple HTTP server (e.g., `python -m http.server`)
- Validate HTML: `npx html-validate *.html`
- Validate CSS: `npx stylelint style.css`
- Validate JS: `npx eslint projects.js`

## Code Style Guidelines
- HTML: Use semantic HTML5 elements; indent with 4 spaces
- CSS: 
  - Follow existing color variables in :root
  - Use flexbox/grid for layouts
  - Mobile-first approach with media queries
- JavaScript:
  - Use ES6+ features (arrow functions, const/let)
  - Add event listeners in DOMContentLoaded
  - Prefer forEach over for loops
- Naming: 
  - Use kebab-case for CSS classes
  - Use camelCase for JavaScript variables/functions
- File organization: Keep all pages in root, assets in assets/ folder