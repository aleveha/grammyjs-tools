import react from "@astrojs/react";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), react(), tailwind()],
});
