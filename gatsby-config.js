module.exports = {
  siteMetadata: {
    title: `WebARtisan`,
    author: {
      name: `SUCI`,
      summary: `Passionate developer with love for challenges.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://webar-tisan.netlify.app/`,
    social: {
      twitter: `telefonosuci`,
    },
    menuLinks: [
      {
        name: "home",
        href: "/",
      },
      {
        name: "About me",
        href: "/about-me",
      },
      {
        name: "Contact",
        href: "/contact",
      },
    ],
    textContents: {
      contactText: "Ciao! Per metterti con contatto con noi e richiedere una valutazione senza impegno delle tue necessità, compila il modulo qua sotto e verrai ricontattato al più presto.",
      staseraInTVPrivacyText: "Note della privacy"
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
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
              maxWidth: 630,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-180560365-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],
}
