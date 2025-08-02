/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // agrega todos los dominios externos desde los que cargues imágenes
    domains: ["m.media-amazon.com", "img.freepik.com",  "i.blogs.es"],
  },
};

module.exports = nextConfig;
