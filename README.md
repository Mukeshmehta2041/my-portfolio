# Modern Developer Portfolio

A high-performance, responsive portfolio for a Senior Full-Stack Developer, built with the latest web technologies including Next.js 16, React 19, and Tailwind CSS 4.

## 🚀 Overview

This repository contains a professional developer portfolio designed to showcase projects, skills, and experience with a focus on performance, accessibility (GIGW compliance), and modern aesthetics.

- **Developer:** Mukesh
- **Role:** Senior Full-Stack Developer
- **Primary Tech:** React, Next.js, Node.js, PostgreSQL, Spring Boot, Docker

### Content policy

This portfolio is personal and experience-focused. Copy avoids "open to work," "available for freelance," or explicit service offerings to align with employer moonlighting policy.

## 🌐 Static Deployment (AWS S3 & CloudFront)

The project is configured for **Static Site Generation (SSG)**. Using `next build` will generate a standalone `out/` folder containing the entire static website.

### Deployment Steps:

1. **Build the Site:**
   ```bash
   pnpm build
   ```
   This creates an `out/` directory.

2. **AWS S3 Setup:**
   - Create an S3 Bucket (e.g., `my-portfolio-bucket`).
   - Enable **Static Website Hosting**.
   - Set `index.html` as the Index document and `index.html` as the Error document (for SPA routing).
   - Upload the contents of the `out/` folder to the bucket.

3. **CloudFront Distribution (Recommended):**
   - Create a CloudFront Distribution with the S3 bucket as the origin.
   - Configure **Origin Access Control (OAC)** to keep the S3 bucket private.
   - Set the **Default Root Object** to `index.html`.
   - Update DNS (Route53) to point your domain to the CloudFront distribution.

## ✨ Key Features

- **Responsive Design:** Optimized for mobile, tablet, and desktop viewports.
- **Dynamic Animations:** Smooth transitions and scroll-triggered animations powered by `framer-motion` and `react-intersection-observer`.
- **Project Showcase:** Highlights key professional projects with impact metrics (e.g., 100K+ citizens served, 99.9% uptime).
- **Professional Timeline:** Detailed career progression with key achievements and impact highlights.
- **Tech Stack Visualization:** Dedicated section for core technologies and tools.
- **Dark Mode Support:** Clean, high-contrast dark theme by default, leveraging `next-themes`.
- **Performance Optimized:** Uses Next.js App Router, optimized images, and efficient component structures.
- **Analytics:** Built-in Vercel Analytics integration.

## 🛠 Tech Stack

### Core Frameworks
- **Framework:** [Next.js 16+](https://nextjs.org/) (App Router)
- **Library:** [React 19+](https://react.dev/)
- **Styling:** [Tailwind CSS 4+](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

### Components & UI
- **Icons:** [Lucide React](https://lucide.dev/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (based on [Radix UI](https://www.radix-ui.com/))
- **Form Management:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Carousel:** [Embla Carousel](https://www.embla-carousel.com/)

### Development & DevOps
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Deployment:** Optimized for [Vercel](https://vercel.com/)
- **Monitoring:** [Vercel Analytics](https://vercel.com/analytics)

## 📂 Project Structure

```text
├── app/                  # Next.js App Router (Layouts & Pages)
├── components/           # Reusable UI components
│   ├── ui/               # Atomic Shadcn components
│   └── ...               # Section-specific components (Hero, Projects, etc.)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets (images, icons)
├── styles/               # Global CSS and Tailwind configurations
└── tsconfig.json         # TypeScript configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js 20.x or higher
- pnpm (Recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd developer-portfolio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the application for production.
- `pnpm start`: Runs the built application.
- `pnpm lint`: Runs ESLint to check for code quality.

## 📄 License

This project is licensed under the MIT License.
