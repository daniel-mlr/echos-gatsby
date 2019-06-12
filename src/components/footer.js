import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa'

import footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
  `)
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container} >
        <p>Copyright by {data.site.siteMetadata.author} © 2019</p>
        <div className={footerStyles.social} >
          <FaTwitter style={{ color: 'grey', fontSize: '16px', width: '40px' }} />
          <FaFacebook style={{ color: 'grey', fontSize: '16px', width: '40px' }} />
          <FaInstagram style={{ color: 'grey', fontSize: '16px', width: '40px' }} />
        </div>
      </div>
    </footer>
  )
}

export default Footer