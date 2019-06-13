import React from 'react'
import localStyle from './blogGridCard.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import BlogCard from '../components/blogCard'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const BlogGridCard = () => {
  const blogData = useStaticQuery(graphql`
    query {
      allContentfulBlogues(sort: { fields: publicationDate, order: DESC }) {
        edges {
          node {
            titre
            publicationDate(formatString: "MMM Do, YYYY")
            slug
            previewPicture { 
              title 
              description
              file {
                url
              }
            }
            body { json }
          }
        }
      }
    }
  `)

  return (
    <section>
      <div className={localStyle.container} >
        {
          blogData.allContentfulBlogues.edges.map((edge, idx) => {
                      
            return (
              <BlogCard 
                name={edge.node.titre}
                key={idx}
                date={edge.node.publicationDate}
                slug={edge.node.slug}
                imgUrl={edge.node.previewPicture.file.url}
                imgAlt={edge.node.previewPicture.description}
                content="">
              </BlogCard>
            )
          })
        }
      </div>
    </section>
  )
}

export default BlogGridCard