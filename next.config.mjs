/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";

// const nextConfig = {
//   //   reactStrictMode: true,
//   pwa: {
//     dest: "public", // Default output directory for service worker and manifest files
//     register: true, // Enable service worker registration
//     skipWaiting: true, // Allow immediate activation of new service worker
//     // Other PWA configuration options
//   },
// };

// export default withPWA(nextConfig);
const nextConfig = withPWA({});
export default nextConfig;
