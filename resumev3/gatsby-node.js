/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode, basePath: `pages` })
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }
//   const createPaginatedPages = require('gatsby-paginate')
//   const { node } = require('prop-types')
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWordpressPage {
            edges {
              node {
                title
                content
                date
                slug
                wordpress_id
              }
            }
          }
      allWordpressPost(sort: { fields: [date] }) {
        edges {
          node {
            title
            excerpt
            content
            slug
          }
        }
      }
      allWordpressWpYoutube(sort: { fields: [date] }) {
        edges {
          node {
            title
            content
            slug
          }
        }
      }
    }
  `).then(result => {
    result.data.allWordpressPage.edges.forEach(({ node }) => {
        console.log(node.id)
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            // This is the $slug variable
            // passed to page.js
            id: node.wordpress_id
          },
        })
    }),

    result.data.allWordpressPost.edges.forEach(({ node }) => {
      createPage({
        path: `blogs/` +  node.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    }),
    result.data.allWordpressWpYoutube.edges.forEach(({ node }) => {
      createPage({
        path: `books/` + node.slug,
        component: path.resolve(`./src/templates/youtube-post.js`),
        context: {
          // This is the $slug variable
          // passed to blog-post.js
          slug: node.slug,
        },
      })
    })
  })
}