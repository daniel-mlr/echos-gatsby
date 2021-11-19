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
        # author
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
            <LocalizedLink to="/">
              <img
                className=""
                style={{width: '80px'}}
                title="Les Échos du Pacifique"
                src='https://res.cloudinary.com/danielmeilleurimg/image/upload/c_scale,w_80/v1562662528/echos/logo/Les_Echos_du_Pacifique_illustration_white_800x800-18.png'
                alt='logo'
              />
            </LocalizedLink>
          </div>
          <div className="column" style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'flex-end'
          }}>
            <div style={{display: 'flex', alignSelf: 'center'}} >
              <a 
                style={{ color: 'inherit', padding: '0 20px' }}
                href="https://twitter.com/ChoeurLesEchos"
              >
                <FaTwitter className="icon is-large" title="twitter" />
              </a>
              <a
                style={{ color: 'inherit', padding: '0 20px' }}
                href="https://www.facebook.com/Les-Échos-du-Pacifique-216683941792717/"
              >
                <FaFacebook className="icon is-large" title="facebook" />
              </a>
              <a style={{ color: 'inherit', padding: '0 20px' }} href="#">
                <FaInstagram className="icon is-large" title="instagram" />
              </a>
            </div>
            <div >
              <p className="content pt-20">
                Copyright by {data.site.siteMetadata.title} © 2021
              </p>
              <p>
                Web design: <a href="http://dmeilleur.com">Daniel Meilleur</a>
              </p>
            </div>
          </div>
          <div className="column is-one-fifth">
            {/* <p className="fmlink" ><LocalizedLink to="/members">Membres</LocalizedLink></p> */}
            <p className="fmlink" >Membres</p>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-three-quarters">
            <hr style={{height: '.1px'}}></hr>
            <div className="content">
              <p className="has-text-secondary is-size-7">
                {t('ancestralTerritory')}
              </p>
            </div>
            <hr style={{height: '.1px'}}></hr>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-one-third">
            <p className="is-size-7">
              {t('reconnaissanceBC')}
            </p>
            <img src="https://res.cloudinary.com/danielmeilleurimg/image/upload/v1636687582/echos/divers/BC-logo.jpg">
            </img>
          </div>
          <div className="column is-one-third">
            <p className="is-size-7">
              {t('reconnaissanceCoquitlam')}
            </p>
            <img src="https://res.cloudinary.com/danielmeilleurimg/image/upload/v1636688603/echos/divers/CoquitlamLogo.jpg">
            </img>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer