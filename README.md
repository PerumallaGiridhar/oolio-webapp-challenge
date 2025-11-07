# Oolio Webapp Challenge

Live demo (Cloudflare Pages):
https://oolio-webapp-challenge.pages.dev/

This repository contains my solution for the Oolio webapp challenge, built with React, TypeScript, and Vite. It implements a small product catalog with a cart experience, API data fetching, and a clean component structure.

This is a two-part challenge:
- Part 1 (this repo): Frontend webapp.
- Part 2: Backend API, deployed for the live demo at https://oolio.fly.dev/api.

## Features

- Product list fetched via React Query
- Simple cart powered by Zustand (add, remove, clear; persisted to localStorage)
- Reusable UI primitives (Button) and icons
- Type-safe code with TypeScript
- Vite dev server and optimized production build

## Tech Stack

- React 19, TypeScript, Vite
- @tanstack/react-query for data fetching/caching
- Zustand for client-side state (cart)
- Tailwind CSS 4 for styling utilities
- Axios for HTTP client

## Project Structure

- `src/services/api-client.ts` – Axios instance (reads `VITE_API_ENDPOINT`)
- `src/hooks/use-products.ts` – Products query hook (React Query)
- `src/hooks/use-cart.ts` – Cart store (Zustand)
- `src/components/` – UI components and icons
- `public/` – Static assets (e.g., `cake.svg`)

## Getting Started

Prerequisites: Node.js 18+ and npm.

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Using pnpm (optional):

```bash
pnpm install
pnpm dev
```

Open http://localhost:5173 in your browser.

## Environment

Create a `.env` file (or `.env.local`) if you need a custom API endpoint:

```
VITE_API_ENDPOINT=https://your-api.example.com
```

Live demo is configured to use:

```
VITE_API_ENDPOINT=https://oolio.fly.dev/api
```

## Build & Preview

```bash
npm run build
npm run preview
```

## Notes for Reviewers

- The live deployment is linked at the top for quick verification.
- Cart state lives in `use-cart.ts` and persists to localStorage.
- Components and hooks are organized for clarity and ease of extension.

## License

This project is provided as part of a coding challenge.
