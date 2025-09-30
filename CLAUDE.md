# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Quick Start
- `./scripts/dev-start.sh` - Start PostgreSQL and run migrations, then start dev server
- `docker-compose up -d` - Start PostgreSQL and pgAdmin containers only

### Core Development
- `npm run dev` - Start the Next.js development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run Next.js linting (currently configured to ignore errors during builds)

### Database Management (PostgreSQL Required)
- `./scripts/db-migrate.sh status` - Show migration status
- `./scripts/db-migrate.sh create <name>` - Create new migration
- `./scripts/db-migrate.sh deploy` - Deploy pending migrations
- `./scripts/db-migrate.sh reset` - Reset database (dev only)
- `npm run db:generate` - Generate Prisma client from schema
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open Prisma Studio GUI

## Architecture Overview

### Stack
- **Framework**: Next.js 14.2.16 with App Router
- **UI**: React 18 with Tailwind CSS and Radix UI components
- **Database**: PostgreSQL (required for both development and production)
- **ORM**: Prisma with automatic migrations on server startup
- **Auth**: NextAuth.js v4 with Prisma adapter
- **3D Graphics**: Three.js, React Three Fiber, and Three Globe
- **Animations**: GSAP and Motion
- **Styling**: Tailwind CSS with custom animations via tailwindcss-animate

### Project Structure
- `/app` - Next.js App Router pages and API routes
  - `/api` - Backend API endpoints (admin, auth, contact, track)
  - `/admin` - Admin dashboard pages with visitor tracking
  - `/contact` - Contact form page
  - `/realm9` - Special feature section
- `/components` - Reusable React components
  - `/ui` - Radix UI-based component library
  - `/landing` - Landing page specific components
  - `/AnimatedComponent` - Animation wrapper components
- `/lib` - Utility functions and configuration
  - `email.ts` - Email sending via AWS SES and Nodemailer
  - `prisma.ts` - Prisma client singleton
- `/prisma` - Database schema and migrations
- `/public` - Static assets

### Database Models
- `ContactSubmission` - Contact form submissions with status tracking
- `User`, `Account`, `Session`, `VerificationToken` - NextAuth.js authentication tables

### Important Configuration Notes
- TypeScript and ESLint errors are ignored during builds (see `next.config.mjs`)
- Path alias `@/*` maps to the project root
- Uses both Inter and Poppins fonts from Google Fonts
- PostgreSQL is required - use Docker Compose for local development
- Database migrations run automatically on container startup (Liquibase-style)
- Migrations are located in `prisma/migrations/`

### API Structure
The app uses Next.js App Router API routes under `/app/api/`:
- `/admin` - Admin functionality endpoints
- `/auth` - Authentication endpoints (NextAuth.js)
- `/contact` - Contact form submission handling
- `/track` - User tracking and analytics

### Key Dependencies
- UI Components: Full Radix UI suite (dialogs, dropdowns, tooltips, etc.)
- Forms: react-hook-form with zod validation
- Email: AWS SES client and Nodemailer
- Analytics: Vercel Analytics integration