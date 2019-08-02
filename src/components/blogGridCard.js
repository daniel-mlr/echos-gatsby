import React from 'react'
import BlogCard from '../components/blogCard'
import ReadMoreButton from '../components/readMoreButton'

const BlogGridCard = ({title, buttonText, data}) => {

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
                  {...edge.node}
                  buttonText={buttonText}
                >
                </BlogCard>
              </div>
            )
          })
        }
      </div>
      <div className="container" style={{paddingTop: '2rem'}}>
        <ReadMoreButton
          // title={data.siteMetadata.readMore...}
          title={'read more news'}
        />
      </div>
    </section>
  )
}

export default BlogGridCard
