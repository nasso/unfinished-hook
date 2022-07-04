import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    prerender: {
      default: true,
    },
    adapter: adapter(),
  },
};

export default config;
