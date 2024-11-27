// @ts-check
import { defineConfig,envField } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import svelte from '@astrojs/svelte';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  integrations: [svelte(), tailwind()],
  experimental: {
    env: {
      schema: {
        TEST1: envField.string({
          context: 'client',
          access: 'public',
        }),
        TEST2: envField.string({
          context: 'server',
          access: 'secret',
        })
      }
    }
  }
});