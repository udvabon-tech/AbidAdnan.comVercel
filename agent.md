# Agent Instructions

## Project Overview
This is a personal portfolio website for Abid Adnan, built with Next.js and styled with a custom design system. The site features a clean, minimalist aesthetic inspired by Simon Pan's portfolio design.

## Design System

### Color Tokens
- `--color-bg`: #F5F7FA (Page background)
- `--color-surface`: #FFFFFF (Cards, sections)
- `--color-text`: #0F1115 (Primary text)
- `--color-muted`: #5C5F66 (Secondary text)
- `--color-primary`: #0B335E (CTA buttons, links)
- `--color-accent`: #5588B3 (Soft highlights)
- `--color-border`: #E2E6EA (Input borders, separators)
- `--color-focus`: #0088FF (Focus ring/accessibility)
- `--color-shadow`: rgba(15,17,21,0.08) (Box shadows)

### Typography
- **Headings**: Inter, 36–48px, Semi-bold
- **Body**: Noto Sans Bengali, 18px, Regular
- **UI Text**: Inter, 14–16px, Medium
- **Line height**: 1.6

## Brand Identity
- **Name**: Abid Adnan
- **Tagline**: Islam | Future | Insight
- **Navigation**: PROJECT, WRITING, ABOUT

## Technical Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Custom CSS variables for design tokens
- Google Fonts (Inter + Noto Sans Bengali)

## File Structure
\`\`\`
app/
├── layout.tsx          # Root layout with font loading
├── page.tsx           # Homepage with header and project showcase
├── globals.css        # Global styles and design tokens
components/
├── logo.tsx           # Geometric logo component (currently unused)
tailwind.config.ts     # Tailwind configuration
agent.md              # This file - agent instructions
\`\`\`

## Key Features
- Fully responsive design
- Custom color system with CSS variables
- Typography hierarchy with Bengali font support
- Clean portfolio project showcase
- Accessible navigation with focus states

## Development Guidelines
1. Always use the defined color tokens via CSS variables
2. Maintain typography hierarchy (Inter for headings/UI, Noto Sans Bengali for body)
3. Keep the minimalist aesthetic - plenty of white space
4. Ensure responsive design across all screen sizes
5. Use semantic HTML and proper accessibility attributes

## Future Enhancements
- Add more portfolio projects
- Implement Writing and About sections
- Add smooth scroll navigation
- Include contact form
- Add dark mode support
- Implement project detail pages

## Notes
- The site currently showcases a placeholder "UBER MAGIC 2.0" project
- Navigation links are currently anchor links (not functional pages)
- Design system is fully implemented and ready for expansion
- All fonts are loaded via Next.js font optimization (no external requests)
