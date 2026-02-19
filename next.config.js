/** @type {import('next').NextConfig} */
const nextConfig = {
  // export the app as static HTML
  output: 'export',
  // point assets at the github.io hostname so that the CSS/JS files are
  // fetched from the stable GitHub Pages domain instead of the custom
  // domain.  this avoids the 404s caused by the custom host not yet
  // reflecting the static files.
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://thatreatment.github.io'
      : '',
  // Use a custom base path if you're serving from a docs folder (GitHub Pages)
  // basePath: '/'
}

module.exports = nextConfig
