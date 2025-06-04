# Zide 🌐

**Zide** is a modern web application focused on **digital simplicity** and **efficiency**.
We design and develop useful, privacy-conscious tools to improve users’ daily workflows.

## 🚀 Features

- ✨ Smooth, animated interface built with `React` and `Framer Motion`
- 🧠 Project showcase with detailed descriptions and links
- ⚙️ SEO-ready with [`react-helmet-async`](https://github.com/staylor/react-helmet-async)
- 🗺️ Sitemap and Open Graph meta tags for rich link previews

## 🧩 Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **SEO**: React Helmet Async, dynamic metadata

## 🚀 Getting Started

### 📦 Installation

```bash
nvm use 22.14.0
npm install
```

### 🏗️ Development

```bash
npm run dev
```

### 📦 Build

```bash
docker build -t zide .
docker compose up -d
```

### 📤 Deployment Workflow

The CI pipeline deploys updates to the staging environment automatically with every push to the `main` branch. For production, deployment is triggered by committing a new tag.
