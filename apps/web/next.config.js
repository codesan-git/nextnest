/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'github.com',
          },
          {
            protocol: 'https',
            hostname: 'assets.pokemon.com'
          },
          {
            protocol: 'https',
            hostname: 'pokeapi.co'
          }
        ],
      },
}

module.exports = nextConfig
