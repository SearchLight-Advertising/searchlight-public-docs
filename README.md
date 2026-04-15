# SearchLight Documentation

Public-facing technical documentation for SearchLight integrations and data ingestion specs.

## Getting Started

Before installing dependencies, authenticate with SearchLight's package registry:

```bash
npm run aws-login
```

Then install dependencies:

```bash
npm install
```

## Local Development

```bash
npm start
```

Starts a local development server at `localhost:3000`. Most changes are reflected live without restarting.

## Build

```bash
npm run build
```

Generates static content into the `build` directory.

## Deployment

```bash
GIT_USER=<your GitHub username> npm run deploy
```

Builds the site and pushes to the `gh-pages` branch for GitHub Pages hosting.