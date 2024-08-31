/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: `@import "src/styles/variables.scss"; @import "src/styles/functions.scss"; @import "src/styles/mixins.scss";`,
  },
  images: {
    domains: ['rickandmortyapi.com'],
  },
};

export default nextConfig;
