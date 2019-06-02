/* globals module */
const path = require('path')

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions
//   // Transform the new node here and create a new node or
//   // create a new node field.
//   if (node.internal.type === 'MarkdownRemark') {
//     const slug = path.basename(node.fileAbsolutePath, '.md')
//     console.log('@@@@@@ slug @@@@@@', slug)
//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug
//     })
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node { slug }
        }
      }
    } 
  `)
  // res.data.allMarkdownRemark.edges.forEach( (edge) => {
  res.data.allContentfulBlogPost.edges.forEach( (edge) => {
    createPage({
      component: blogTemplate,
      // path: `/blog/${edge.node.fields.slug}`,
      path: `/blog/${edge.node.slug}`,
      context: {
        // slug: edge.node.fields.slug
        slug: edge.node.slug
      }
    })
  })
}
//   allMarkdownRemark {
//     edges {
//       node {
//         fields {
//           slug
//         }
//       }
//     }
//   }
// }