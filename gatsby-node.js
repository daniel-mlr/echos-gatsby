/* globals module */
const path = require('path')

// Cette config est pour Contentful.
// Consulter versions précédentes pour voir configuration 
// pour fichiers locaux markdown.
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const res = await graphql(`
    query {
      allContentfulBlogues {
        edges {
          node { slug }
        }
      }
    } 
  `)
  res.data.allContentfulBlogues.edges.forEach( (edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}