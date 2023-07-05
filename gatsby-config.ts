import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Danger Days`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
    {
      resolve: `gatsby-source-supabase`,
      options: {
        supabaseUrl: "https://wommuslhvsnxlagtyair.supabase.co",
        supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvbW11c2xodnNueGxhZ3R5YWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkxMTE4ODMsImV4cCI6MTk4NDY4Nzg4M30.0JXmUdBDv64iNj6zzJM2dX3IsvuafmBhw1an6gBosXw",
        types: [
          {
            type: "Posts",
            query: (client: any) => client.from("posts").select("*"), //sync or async
          }
        ],
      },
    },]
};

export default config;
