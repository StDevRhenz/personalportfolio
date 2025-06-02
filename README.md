This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



# Next.js Project - Mode Differences

## Development Mode
- Command: `npm run dev`
- Purpose: For building and testing your app locally.
- Features:
  - Hot Reloading — instantly see changes without restarting.
  - Debugging tools enabled.
  - Shows the small "N" icon in the bottom-left corner.
  - Not optimized for speed or size.
- Use this mode while developing your project.

---

## Production (Deployment) Mode
- Commands:
  - Build: `npm run build`
  - Start: `npm start`
- Purpose: To create an optimized version of your app for real users.
- Features:
  - Minimized and optimized code for performance.
  - No development tools or debug info.
  - The "N" icon disappears.
  - Ready to be deployed to a server or hosting platform.
- Use this mode when you want to publish your site.

---

## How to switch between modes

- To develop locally, run:
  ```bash
  npm run dev




npm run build
npm start