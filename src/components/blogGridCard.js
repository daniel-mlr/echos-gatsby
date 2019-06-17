import React from 'react'
import localStyle from './blogGridCard.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import BlogCard from '../components/blogCard'


const BlogGridCard = () => {
  const blogData = useStaticQuery(graphql`
    query {
      allContentfulBlogues(
        sort: { fields: publicationDate, order: DESC }
        limit: 3
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
                //imgUrl={edge.node.previewPicture.file.url}
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