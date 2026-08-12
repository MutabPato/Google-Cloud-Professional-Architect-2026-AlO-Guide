import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-cloudflare';

const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter()
  }
};

export default config;
