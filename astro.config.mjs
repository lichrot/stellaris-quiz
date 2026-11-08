// @ts-check
import { defineConfig } from 'astro/config';

const site = process.env.URL || "http://localhost:3000";

// https://astro.build/config
export default defineConfig({
  site,
  output: 'static',
  build: { assets: 'a', format: 'file' },
});
