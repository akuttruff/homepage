# Homepage for [Amie Kuttruff](http://www.amiekuttruff.com)
### Resume + links to talks, music projects, and social accounts

This project ports my old website over to React + Vite. My code lives in an [AWS S3](https://aws.amazon.com/s3/) bucket, and I host my site with [Google Domains](https://domains.google/).

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Routing:** React Router DOM v6
- **Build Tool:** Vite 5 (fast dev server & optimized builds)
- **Styling:** CSS with Google Fonts (Lato)

## Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Lint & format
npm run lint
npm run format
```

## Project Structure

```
src/
├── components/     # Reusable React components
├── containers/     # Page-level components
├── data/           # Site content & data
├── img/            # Static images
└── media/          # Additional assets
```

