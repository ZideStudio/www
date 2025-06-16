# www.Zide.fr

**WWW Zide** is a website that showcases what we do as a collective. Our goal is to offer tools that are digitally simple, helping users work more efficiently. The site highlights the projects we’ve created and the ones we’re currently working on!

## Tech Features

- Smooth, animated interface built with `React` and `Framer Motion`
- SEO with [`react-helmet-async`](https://github.com/staylor/react-helmet-async)
- Sitemap and Open Graph meta tags for rich link previews

## Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **SEO**: React Helmet Async, dynamic metadata

## Getting Started

### Installation

```bash
nvm use 22.14.0
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
docker build -t zide .
docker compose up -d
```

### Deployment Workflow

The CI pipeline deploys updates to the staging environment automatically with every push to the `main` branch. For production, deployment is triggered by committing a new tag.
