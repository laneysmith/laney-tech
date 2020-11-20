module.exports = {
  siteMetadata: {
    title: `laney.tech`,
    author: {
      name: `Laney Smith`,
    },
    description: `Laney Smith's portfolio`,
    siteUrl: `https://laney.tech/`,
    social: {
      github: `laneysmith`,
      linkedin: `laneysmith`,
      email: `lsmith.unc@gmail.com`,
    },
    externalPosts: [
      {
        title: 'Tutorial: Mapbox and React for Beginners (Dev.to)',
        link: 'https://dev.to/laney/react-mapbox-beginner-tutorial-2e35',
      },
      {
        title: 'Tutorial: Conditionally Styling Features Based on Data in Mapbox (Dev.to)',
        link:
          'https://dev.to/laney/mapbox-how-to-conditionally-style-features-based-on-covid-19-data-h78',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/articles`,
        name: `articles`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `laney.tech`,
        short_name: `laney.tech`,
        background_color: `#ffffff`,
        theme_color: `#196127`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `content/assets/fav.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
          options: {
            props: {
              className: 'svg-icon',
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `laney-tech`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
