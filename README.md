# morihladko.com

Welcome to the source code of my personal website! Feel free to poke around, learn from it, or use it as inspiration for your own projects. Visit [morihladko.com](https://morihladko.com) to see the live site.

## Tech Stack

- **TanStack Start** - React meta-framework with SSR
- **TanStack Router** - File-based routing
- **React 19** with React Compiler
- **Tailwind CSS v4** - Custom "Modern Phosphorus" design system
- **Biome** - Linting and formatting
- **Cloudflare Workers** - Deployment

## Getting Started

```bash
# Clone the repo
git clone https://github.com/morihladko/morihladko.com.git
cd morihladko.com

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

The site will be available at `http://localhost:3000`.

## Building For Production

```bash
pnpm build
```

## Styling

The site uses [Tailwind CSS](https://tailwindcss.com/) with a custom "Modern Phosphorus" design system - a futuristic command-line interface aesthetic with amber-on-black colors.

## Linting & Formatting

```bash
pnpm lint     # Run linter
pnpm format   # Format code
pnpm check    # Both lint + format
```

## Project Structure

```
src/
├── routes/
│   ├── __root.tsx    # Root layout
│   └── index.tsx     # Home page
├── components/
│   └── Header.tsx    # Navigation header
├── styles.css        # Global styles & design system
└── router.tsx        # Router configuration
```

## Deployment

Deployed to [Cloudflare Workers](https://workers.cloudflare.com/) with full SSR support:

```bash
pnpm deploy
```

## Learn More

- [TanStack Start](https://tanstack.com/start)
- [TanStack Router](https://tanstack.com/router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)

## License

Feel free to use this code as inspiration for your own projects.
