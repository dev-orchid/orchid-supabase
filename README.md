# Orchid SaaS Platform

A modern SaaS business website built with Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, and Supabase.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** components for beautiful UI
- **Supabase** for backend and database
- **ESLint & Prettier** for code quality
- Responsive design
- Modern landing page with Hero, Features, CTA, and Footer sections

## Project Structure

```
orchid-supabase/
├── src/
│   ├── app/                    # Next.js 14 app directory
│   │   ├── globals.css         # Global styles with Tailwind
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── input.tsx
│   │   └── landing/            # Landing page components
│   │       ├── header.tsx
│   │       ├── hero.tsx
│   │       ├── features.tsx
│   │       ├── cta.tsx
│   │       └── footer.tsx
│   ├── lib/
│   │   ├── supabase/           # Supabase client utilities
│   │   │   ├── client.ts       # Browser client
│   │   │   └── server.ts       # Server client
│   │   └── utils.ts            # Utility functions
│   └── types/                  # TypeScript types
├── public/                     # Static assets
│   ├── images/
│   └── fonts/
├── .env.example               # Environment variables template
└── components.json            # shadcn/ui configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- A Supabase account and project

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Set up environment variables:

Create a `.env.local` file in the root directory and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

You can find these values in your Supabase project settings under API.

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from Settings > API
3. Add them to your `.env.local` file
4. Create your database schema in the Supabase dashboard

## Adding shadcn/ui Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

## Deployment

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add your environment variables
4. Deploy!

### Environment Variables for Production

Make sure to add these environment variables in your deployment platform:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Supabase](https://supabase.com/) - Backend and database
- [Lucide React](https://lucide.dev/) - Icons
- [ESLint](https://eslint.org/) - Linting
- [Prettier](https://prettier.io/) - Code formatting

## License

MIT
