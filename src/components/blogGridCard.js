import React from 'react'
import localStyle from './blogGridCard.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import BlogCard from '../components/blogCard';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const BlogGridCard = (props) => {
  const blogData = useStaticQuery(graphql`
    query {
      allContentfulBlogues(sort: { fields: publicationDate, order: DESC }) {
        edges {
          node {
            titre
            publicationDate(formatString: "MMM Do, YYYY")
            slug
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
        blogData.allContentfulBlogues.edges.map((edge) => {
          const options = {
            renderNode: {
              'embedded-asset-block': (node) => {                
                return node.data.target.fields.file['en-US'].url
              }
            }
          }          
          
          return (
            <BlogCard name={edge.node.titre} 
            date={edge.node.publicationDate} 
            slug={edge.node.slug}
            imgUrl={ documentToReactComponents(edge.node.body.json, options)[2]}
            content="" ></BlogCard>
          )
        })
      }
      </div>
    </section>
  )}
  
  export default BlogGridCard