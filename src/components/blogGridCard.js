import React from 'react'
import localStyle from './blogGridCard.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import BlogCard from '../components/blogCard'

const BlogGridCard = () => {
  const blogData = useStaticQuery(graphql`
    query {
      allContentfulBlogues(
        sort: { fields: publicationDate, order: DESC }
        limit: 4
      ) {
        edges {
          node {
            titre
            publicationDate(formatString: "MMM Do, YYYY")
            slug
            previewPicture { 
              title 
              description
              fluid(maxWidth: 300) {
                ...GatsbyContentfulFluid
              }
            }
            summary { summary }
            body { json }
          }
        }
      }
    }
  `)

  // this nbCard should be determined by the @media size
  const nbCard = 3

  return (
    <section>
      <div className={localStyle.container} >
        {
          blogData.allContentfulBlogues.edges.slice(0, nbCard).map((edge, idx) => {
            return (
              <BlogCard 
                name={edge.node.titre}
                key={idx}
                date={edge.node.publicationDate}
                slug={edge.node.slug}
                imgFluid={edge.node.previewPicture}                
                content={edge.node.summary.summary} >
              </BlogCard>
            )
          })
        }
      </div>
    </section>
  )
}

export default BlogGridCard