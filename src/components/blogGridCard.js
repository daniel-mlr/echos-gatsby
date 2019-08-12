import React from 'react'
import BlogCard from '../components/blogCard'
import ReadMoreButton from '../components/readMoreButton'
import SectionDivider from '../components/sectionDivider'
import labels from '../constants/blogs'

const BlogGridCard = ({langtag, data}) => {

  return (
    <section className="section">

      <SectionDivider label={labels.news[langtag]} />

      <div className="columns">
        {/* show 2 entries of blogs if less than laptop, 
          3 entries from laptop to widescreen 
          and 4 entries for wide screens */
          data.edges.map((edge, idx) => {
            const column = idx === 2 ? 'column is-hidden-touch'
              : idx === 3 ? 'column is-hidden-until-widescreen'
                : 'column'
            return (
              <div className={column} key={idx}>
                <BlogCard key={idx} {...edge.node} />
              </div>
            )
          })
        }
      </div>
      
      {/* read more button */}
      <div className="container" style={{paddingTop: '2rem'}}>
        <ReadMoreButton
          label={labels.readMoreButton[langtag]}
        />
      </div>
      
    </section>
  )
}

export default BlogGridCard