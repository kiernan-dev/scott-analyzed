# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React application built with Vite that provides a comprehensive resume analysis and career strategy report for Scott D. Allen's transition from Quality Assurance to Product Management. The application is designed as a single-page interactive report with smooth animations and a modern industrial design.

## Development Commands

- **Development server**: `pnpm dev` - Starts Vite development server
- **Build**: `pnpm build` - Creates production build in `dist/` directory
- **Lint**: `pnpm lint` - Runs ESLint for code quality checks
- **Preview**: `pnpm preview` - Preview production build locally
- **Deploy**: `pnpm deploy` - Builds and deploys to GitHub Pages (predeploy hook runs build automatically)

## Architecture & Tech Stack

### Core Technologies
- **React 19** with JSX (not TSX)
- **Vite** as build tool and dev server
- **Tailwind CSS v4** with CSS variables for theming
- **Framer Motion** for animations and transitions
- **React Router DOM** for navigation (though currently single-page)

### UI Framework
- **shadcn/ui** components with Radix UI primitives
- **Lucide React** for icons
- **New York** style variant configured
- Component aliases: `@/components`, `@/lib/utils`, `@/components/ui`

### Project Structure
```
src/
├── components/           # Main application components
│   ├── ui/              # shadcn/ui components (accordion, button, card, etc.)
│   ├── ActionPlan.jsx   # Action plan section
│   ├── Header.jsx       # Hero header with Scott's info
│   ├── JobOpportunities.jsx # Job market analysis
│   ├── MarketAnalysis.jsx   # Market research data
│   ├── Navigation.jsx   # Navigation bar
│   ├── ScoreCard.jsx    # Resume scoring metrics
│   └── Sources.jsx      # Data sources and methodology
├── hooks/               # Custom React hooks
├── lib/                 # Utilities (cn function for className merging)
├── assets/              # Static assets
├── App.jsx             # Main application component
└── main.jsx            # Application entry point
```

### Styling Approach
- Uses Tailwind CSS v4 with CSS variables for theming
- Custom industrial design theme with gradients and animations
- Glass morphism effects using custom CSS classes
- Responsive design with mobile-first approach
- Custom typography classes like `industrial-heading`

### Key Architectural Patterns
- Component-based architecture with clear separation of concerns
- Each section is a separate component for modularity
- Framer Motion animations configured with consistent timing
- Uses semantic HTML sections with IDs for navigation
- CSS variables for consistent theming throughout

### Deployment
- Configured for GitHub Pages deployment
- Base path set to `/scott-analyzed` in Vite config
- Homepage URL: `https://kiernan-dev/github.io/scott-analyzed`

## Code Conventions
- Uses JSX (not TypeScript)
- ES modules with modern JavaScript features
- Component names use PascalCase
- Props destructuring in component parameters
- Consistent import ordering: external libraries, then internal components
- ESLint configured with React hooks and refresh plugins
- Uses `pnpm` as package manager