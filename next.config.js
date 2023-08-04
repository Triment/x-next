/** @type {import('next').NextConfig} */
const nextConfig = { 
  experimental: {
    esmExternals: 'loose',
    serverActions: true
  },
  //useFileSystemPublicRoutes: false,
}

export default nextConfig
