/* globals module */

const locales = require('./src/constants/locales')

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
    Object.keys(locales).map(lang => {
      
      const blogPath = `/blog/${edge.node.slug}`
      const localizedPath = locales[lang].default
        ? blogPath
        : locales[lang].path + blogPath

      createPage({
        component: blogTemplate,
        path: localizedPath,
        context: {
          slug: edge.node.slug,
          locale: lang
        }
      })
    })
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(locales).map(lang => {
      
      const localizedPath = locales[lang].default
        ? page.path
        : locales[lang].path + page.path

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
          langtag: locales[lang].locale
        }
      })
    })

    resolve()
  })
}
