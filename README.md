# Nextjs App Router ISR Caching

This example demonstrates Next.js App Router's Incremental Static Regeneration (ISR) using `export const revalidate = 5;` in a server component. It fetches real-time data from an external API and displays the server generation time. The page output is cached for a specified duration (5 seconds), ensuring subsequent requests within this period serve the cached version, showcasing a powerful Next.js caching strategy for dynamic content.

## Language

`javascript`

## How to Run

1. Ensure you have Node.js and npm/yarn/pnpm installed.
2. Create a new Next.js project: `npx create-next-app@latest nextjs-caching-demo`
3. Navigate into the project directory: `cd nextjs-caching-demo`
4. Replace the content of `app/page.tsx` with the provided code (you might need to rename `app/page.tsx` to `app/page.jsx` if you prefer, or adjust the code to be TypeScript compatible).
5. Run the development server: `npm run dev`
6. Open `http://localhost:3000` in your browser and observe the `Page generated at` timestamp on refreshes.

## Original Article

This example accompanies the Turkish article: [Next.js Önbellekleme Stratejileri: Performansı Nasıl Uçurursunuz?](https://fatihsoysal.com/blog/next-js-onbellekleme-stratejileri-performansi-nasil-ucurursunuz/).

## License

MIT — see [LICENSE](LICENSE).
