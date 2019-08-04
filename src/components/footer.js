import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import LocalizedLink from './localizedLink'
import { FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa'
import '../styles/footer.scss'

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
    <footer className="footer">
      <div className="content has-text-centered has-text-grey-light" style={{fontSize: 'smaller'}}>
        <div className="columns">
          <div className="column is-one-fifth has-text-left">
            <ul className="footermenu">
              <li><LocalizedLink to="/contact">Contactez-nous</LocalizedLink></li>
              <li><LocalizedLink to="/contact">Nos répétitions</LocalizedLink></li>
              <li><LocalizedLink to="/about">À propos</LocalizedLink></li>
            </ul>
            <img
              className=""
              style={{width: '80px'}}
              src='https://res.cloudinary.com/danielmeilleurimg/image/upload/v1562662528/echos/Les_Echos_du_Pacifique_illustration_white_800x800-18.png'
              alt='logo'
            />
          </div>
          <div className="column" style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'flex-end'
          }}>
            <div style={{display: 'flex', alignSelf: 'center'}} >
              <a style={{color: 'inherit', padding: '0 20px'}} href="#">
                <FaTwitter className="icon is-large" />
              </a>
              <a style={{ color: 'inherit', padding: '0 20px' }} href="#">
                <FaFacebook className="icon is-large" />
              </a>
              <a style={{ color: 'inherit', padding: '0 20px' }} href="#">
                <FaInstagram className="icon is-large" />
              </a>
            </div>
            <div >
              <p className="content pt-20">
                Copyright by {data.site.siteMetadata.title} © 2019
              </p>
              <p>Web design: {data.site.siteMetadata.author}</p>
            </div>
          </div>
          <div className="column is-one-fifth">
            <p className="fmlink" ><LocalizedLink to="/members">Membres</LocalizedLink></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer