import React from 'react'
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

  return (
    <section className="section">
      <div className="is-divider" data-content="Nouvelles"></div>
      <div className="columns">
        {
          blogData.allContentfulBlogues.edges.map((edge, idx) => {
            const column = idx === 2 ? 'column is-hidden-touch' 
              : idx === 3 ? 'column is-hidden-until-widescreen' 
                : 'column'
            return (
              <div className={column} key={idx}>
                <BlogCard
                  name={edge.node.titre}
                  key={idx}
                  date={edge.node.publicationDate}
                  slug={edge.node.slug}
                  imgFluid={edge.node.previewPicture}
                  content={edge.node.summary.summary} >
                </BlogCard>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default BlogGridCard