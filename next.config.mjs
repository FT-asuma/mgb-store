import nextIntl from "next-intl/plugin";

// Your existing Next.js configuration
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-zerodev.blr1.cdn.digitaloceanspaces.com",
        pathname: "/mbgstore/**",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

// Use nextIntl to extend your configuration with the next-intl plugin
const withNextIntl = nextIntl("./i18n.ts");

export default withNextIntl(nextConfig);
