module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["a0.muscache.com", "upload.wikimedia.org"],
  },
  webpack: (config) => {
    // Important: return the modified config
    return config;
  },
};
