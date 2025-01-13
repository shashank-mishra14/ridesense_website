import { defineConfig } from 'astro/config';
import image from '@astrojs/image';

import tailwind from "@astrojs/tailwind";

// Import the Vercel adapter
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: "https://positivustheme.vercel.app",
  integrations: [tailwind(), image()],
  output: 'server',
  adapter: vercel(),
});