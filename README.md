# Code Curo Website

This project is a React-based marketing website for **Code Curo**, an IT consulting and software engineering company. The site presents the company profile, services, case studies, testimonials, and contact-oriented calls to action in a polished single-page experience inspired by modern SaaS landing pages.

## Overview

The app renders its content from [`src/codeCuroData.json`](./src/codeCuroData.json), which acts as the main content source for:

- company details
- services and developer hiring categories
- industries and domains
- case studies
- testimonials
- contact and office information

The UI is assembled in [`src/App.js`](./src/App.js) and styled with [`src/App.css`](./src/App.css) and [`src/index.css`](./src/index.css).

## Tech Stack

- React
- React Scripts
- CSS
- JSON-driven content

## Features

- responsive navigation with desktop dropdowns and mobile menu
- hero section with company branding and calls to action
- stats section generated from company data
- services showcase and solution highlights
- tabbed case study section
- customer and testimonial sections
- developer-focused section with mock code sample
- footer with company navigation links

## Project Structure

```text
codecuro/
  public/
    code-curo-logo.svg
    logo.png
    index.html
  src/
    App.js
    App.css
    codeCuroData.json
    index.js
    index.css
  package.json
  README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

The app will run locally at `http://localhost:3000`.

## Available Scripts

### `npm start`

Runs the app in development mode.

### `npm run build`

Creates an optimized production build in the `build/` folder.

### `npm test`

Launches the test runner in interactive watch mode.

## Content Updates

Most site content can be updated without changing component logic by editing:

- [`src/codeCuroData.json`](./src/codeCuroData.json)

Component behavior and layout can be adjusted in:

- [`src/App.js`](./src/App.js)
- [`src/App.css`](./src/App.css)
- [`src/index.css`](./src/index.css)

## Notes

- The package is currently named `stripe-clone` in [`package.json`](./package.json), while the actual project is the Code Curo website.
- Several links in the UI are placeholder `#` links and can be replaced with live routes or external URLs when needed.

## Build Verification

To confirm the project compiles successfully, run:

```bash
npm run build
```
