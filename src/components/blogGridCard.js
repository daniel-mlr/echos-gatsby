import React from 'react'
import BlogCard from '../components/blogCard'

const BlogGridCard = ({title, data}) => {

  return (
    <section className="section">
      <div className="is-divider" data-content={title}></div>
      <div className="columns">
        {
          data.edges.map((edge, idx) => {
            const column = idx === 2 ? 'column is-hidden-touch'
              : idx === 3 ? 'column is-hidden-until-widescreen'
                : 'column'
            return (
              <div className={column} key={idx}>
                <BlogCard
                  key={idx}
                  // {...edge.node}
                  name={edge.node.titre}
                  date={edge.node.publicationDate}
                  slug={edge.node.slug}
                  imgFluid={edge.node.previewPicture}
                  content={edge.node.summary.summary} 
                >
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
