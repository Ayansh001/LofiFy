/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure Next.js as needed
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',  // Enable standalone output for Vercel deployment

  // Enable SWC loader for private fields support (if not working with SWC by default)
  experimental: {
    swcLoader: true, // Enable SWC loader
  },

  // Handle TypeScript properly
  typescript: {
    ignoreBuildErrors: true, // Set to true to prevent TypeScript errors from failing the build
  },

  // Add proper API route configuration
  api: {
    bodyParser: true,
  },

  // Webpack configuration: Add custom loader if SWC doesn't fix private fields
  webpack(config, { isServer }) {
    // You can add custom Webpack configurations if needed for private methods handling
    // For example, enabling babel-loader for JS files if necessary
    config.module.rules.push({
      test: /\.js$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
            plugins: ['@babel/plugin-proposal-private-methods'],
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
