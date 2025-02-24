// @ts-check
import { defineConfig } from 'astro/config';
import criticalCSS from "astro-critical-css";

// https://astro.build/config
export default defineConfig({
    integrations: [criticalCSS()]
});
