module.exports = [
  {
    plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
    options: {
      plugins: [],
      name: 'Hamza Zeghari',
      short_name: 'HZeghari',
      start_url: '/',
      background_color: '#020c1b',
      theme_color: '#0a192f',
      display: 'minimal-ui',
      icon: 'src/images/logo.png',
    },
  },
  {
    plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
    options: { plugins: [] },
  },
  {
    plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
    options: {
      plugins: [],
      maxWidth: 700,
      linkImagesToOriginal: true,
      quality: 90,
      tracedSVG: { color: '#64ffda' },
    },
  },
  {
    plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
    options: { plugins: [], trackingId: 'UA-158068254-1' },
  },
  {
    plugin: require('../gatsby-browser.js'),
    options: { plugins: [] },
  },
];
