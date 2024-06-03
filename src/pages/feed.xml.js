import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Mi Blog',
  description: 'Descripción de mi blog',
  site: 'https://mi-sitio.com',
  items: [
    {
      link: '/post-1',
      title: 'Título del Post 1',
      description: 'Descripción del Post 1', // Agregar si es necesario
      pubDate: new Date('2023-01-01').toUTCString(),
    },
    {
      link: '/post-2',
      title: 'Título del Post 2',
      description: 'Descripción del Post 2', // Agregar si es necesario
      pubDate: new Date('2023-01-02').toUTCString(),
    },
  ],
});
