# AGENTS.md

Next.js 15 (App Router) + React 19 + TypeScript + Tailwind v4 + next-intl. Rules below are binding for any code change in this repo.

## Stack
- Next.js 15 App Router, `src/app/[locale]/...` per-locale routing (next-intl, locales: `en`, `fr`).
- Tailwind CSS v4, config in `tailwind.config.js`, imported via `@config` in `src/app/globals.css`.
- ESLint flat config (`eslint.config.mjs`) + Prettier (`.prettierrc`), both enforced — no exceptions without explicit user request.

## Commands
- `npm run lint` — must pass with zero errors before considering a task done.
- `npx prettier --write <files>` — format after any edit (plugins: organize-imports, tailwindcss class sorting — don't hand-sort classes).
- `npm run dev` / `npm run build` — use `build` to validate type errors across the app (tsconfig `strict: true`, `noEmit: true`).

## Project structure
- `src/app/[locale]/<route>/` — route segments. `page.tsx` is the entry; split large pages into sibling components in the same folder (e.g. `presentation.tsx`, `languages.tsx`), lowercase filenames for route-local components.
- `src/components/<Name>/index.tsx` — shared/reusable components, PascalCase folder, always `index.tsx`.
- `src/constants/` — static data (`*.data.ts`), one file per project under `src/constants/projects/`.
- `src/models/` — type/enum definitions, `*.model.ts`.
- `src/hooks/` — custom hooks, `use*.ts`.
- `src/utils/` — pure helper functions.
- `src/services/` — data-fetching/business-logic functions.
- `src/i18n/` — next-intl config/routing, don't hardcode locale logic elsewhere.
- `src/messages/{en,fr}.json` — translation strings, kept in sync (same keys, both locales) for every new UI string.
- Path aliases (use them, never relative `../../..`): `@/*`, `@components/*`, `@models/*`, `@constants/*`, `@utils/*`, `@hooks/*`, `@styles/*`.

## Styling rules (strict)
- **Never hardcode colors** (`#hex`, `rgb()`, `hsl()`, named CSS colors) in JSX/CSS. All colors live in `tailwind.config.js` → `theme.extend.colors` (`primary`, `secondary`, `tertiary`, `activeprimary`, `activesecondary`, `text`, `toast`, `quote`, `scrollbar`, `heading`, `gridfade`). Add new colors there first.
- Use Tailwind utility classes referencing those tokens (`bg-primary`, `text-text`, `border-activeprimary`, ...). Only raw JS/canvas/dynamic-style contexts needing a literal value import `tailwindColors` from `@constants/tailwindColors` and destructure the token — never re-type the hex.
- No inline `style={{ color: ... }}` / arbitrary Tailwind color values (`bg-[#fff]`) — exception: computed values genuinely unknown at build time (see `BackgroundGrid`), still sourced from `tailwindColors`, never a new literal.
- Reusable CSS (not expressible as utility composition) goes in `globals.css` using `@apply` with existing tokens, not new literals.
- Compose `className` with template strings/conditionals as done in existing components (see `Button`); don't introduce a classnames library unless asked.
- Don't hand-order Tailwind classes — Prettier's tailwindcss plugin sorts them on save/format.

## Code conventions
- Components: arrow function consts (`export const Foo = (...) => {}`) for shared components under `src/components`; `export default function` for route `page.tsx`/layout files (Next.js requirement).
- Props: inline `type FooProps = { ... }` above the component, optional props with `?`.
- No `any` (`@typescript-eslint/no-explicit-any`), no non-null assertions (`!`), prefer optional chaining/`const`/template literals/arrow callbacks (enforced by lint, not stylistic preference).
- `import type { X }` for type-only imports (`@typescript-eslint/consistent-type-imports`).
- `console.log` is banned; only `console.error/warn/info/trace/assert` allowed.
- All user-facing strings go through next-intl (`useTranslations`/`getTranslations`), added to both `en.json` and `fr.json` — never hardcode copy in JSX.
- Respect existing a11y lint rules (`jsx-a11y/*`): alt text, labels, no distracting elements, etc.

## Before finishing a task
1. `npm run lint` clean.
2. Format touched files with Prettier (import order + Tailwind class order).
3. If new colors/strings/aliases were needed, confirm they were added at the source (`tailwind.config.js`, both message files) rather than inlined.
