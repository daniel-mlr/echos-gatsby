/* globals module */
const path = require('path')

// see Gatsby Node APIs
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
module.exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-bulma-components/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}