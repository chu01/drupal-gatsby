/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
      {
       allNodeArticle {
         edges {
           node {
             id
           }
         }
       }
      }
    `
    ).then(result => {
        result.data.allNodeArticle.edges.forEach(({ node }) => {
          createPage({
            path: node.id,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
              id: node.id,
            },
          })
        })
      })
    }