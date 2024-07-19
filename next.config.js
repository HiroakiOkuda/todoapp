/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    URL: process.env.URL ?? 'http://localhost:3000',
    SERVER_SideGqlEndpoint:
      process.env.SERVER_SIDE_GRAPHQL_ENDPOINT ?? 'http://127.0.0.1:3300/graphql',
    TODOAPP_ENV: process.env.TODOAPP_ENV ?? 'development',
  },
  env: {
    URL: process.env.URL ?? 'http://localhost:3000',
    CLIENT_SIDE_GRAPHQL_ENDPOINT:
      process.env.CLIENT_SIDE_GRAPHQL_ENDPOINT ?? 'http://localhost:3300/graphql',
    TODOAPP_ENV: process.env.TODOAPP_ENV ?? 'development',
  },
  poweredByHeader: false,
}

module.exports = nextConfig
