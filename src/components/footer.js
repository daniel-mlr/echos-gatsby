import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import LocalizedLink from './localizedLink'
import { FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa'
import '../styles/footer.scss'
import labels from '../constants/footer'

const Footer = (props) => {
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

  // translation rendering helper function
  const t = (label) => labels[label][props.langtag]

  return (
    <footer className="footer">
      <div className="content has-text-centered has-text-grey-light" style={{fontSize: 'smaller'}}>
        <div className="columns">
          <div className="column is-one-fifth has-text-left">
            <ul className="footermenu">
              <li><LocalizedLink to="/contact">{t('contactezNous')} </LocalizedLink></li>
              <li><LocalizedLink to="/contact">{t('repetitions')}</LocalizedLink></li>
              <li><LocalizedLink to="/about">{t('aPropos')}</LocalizedLink></li>
            </ul>
            <img
              className=""
              style={{width: '80px'}}
              // src='https://res.cloudinary.com/danielmeilleurimg/1image/upload/v1562662528/echos/Les_Echos_du_Pacifique_illustration_white_800x800-18.png'
              // src='https://res.cloudinary.com/danielmeilleurimg/image/upload/v1562662528/echos/logo/Les_Echos_du_Pacifique_illustration_white_800x800-18.png'
              // src='https://res.cloudinary.com/danielmeilleurimg/image/upload/c_scale,h_200/v1562662528/echos/logo/Les_Echos_du_Pacifique_illustration_white_800x800-18.png'
              src='https://res.cloudinary.com/danielmeilleurimg/image/upload/c_scale,w_80/v1562662528/echos/logo/Les_Echos_du_Pacifique_illustration_white_800x800-18.png'
              alt='logo'
            />
          </div>
          <div className="column" style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'flex-end'
          }}>
            <div style={{display: 'flex', alignSelf: 'center'}} >
              <a style={{color: 'inherit', padding: '0 20px'}}
                href="https://twitter.com/ChoeurLesEchos">
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