import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import Style from './contact.module.scss'
import { graphql, useStaticQuery } from 'gatsby'
import { FaLocationArrow, FaPhoneSquare } from 'react-icons/fa'

const ContactPage = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        address1
        address2
        phone
      }
    }
  }
  `)

  return (
    <Layout>
      <Head title="Contact" />
      <section className={Style.section} >
        <h1>Venez nous joindre</h1>
        <div className={Style.mainContainer} >
          <h3>Nous recrutons de nouveaux membres</h3>
          <p>
            Quelle meilleure façon de pratiquer vos connaissances en français
            que de le chanter! Nous reprenons nos pratiques cet automne. Contactez-nous
            pour toute information.
          </p>
          <p className={Style.address}>
            <FaLocationArrow style={{'margin': '0 0.3rem 0 0'}} />
            <span>{data.site.siteMetadata.address1}</span>
            <span>{data.site.siteMetadata.address2}</span>
          </p>
          <p className={Style.phone}>
            <FaPhoneSquare style={{marginRight: '0.3rem'}}  />
            {data.site.siteMetadata.phone}
          </p>
          <p>
            <a
              href="https://twitter.com/ChoeurLesEchos"
              rel="noopener noreferrer"
              target="_blank">Our Twitter</a>
          </p>
          <div className={Style.iframeContainer} >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12391.541540037899!2d-122.85109842192472!3d49.23847564793672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867871eb76caf5%3A0x50bd0c8222d0c03!2sPlace+Maillardville+Community+Centre!5e0!3m2!1sfr!2sca!4v1560500215397!5m2!1sfr!2sca"
              width="800"
              height="600"
              frameBorder="0"
              style={{border:0}}
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default ContactPage