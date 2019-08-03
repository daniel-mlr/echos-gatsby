import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa'

// import footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
  `)
  return (
    // <footer className={footerStyles.footer}>
    <footer className="footer">
      {/* <div className={footerStyles.container} > */}
      <div className="content has-text-centered has-text-grey-light">
        <p>Copyright by {data.site.siteMetadata.title} © 2019</p>
        {/* <div className={footerStyles.social} > */}
        <div className="">
          {/* <FaTwitter style={{color:'grey', fontSize: '16px', width:'40px'}} /> */}
          <FaTwitter  size={'2rem'} />
          <FaFacebook size={'2rem'} />
          <FaInstagram size={'2rem'} />
        </div>
      </div>
    </footer>
  )
}

export default Footer