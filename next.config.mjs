/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables static export (no Node server needed).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
