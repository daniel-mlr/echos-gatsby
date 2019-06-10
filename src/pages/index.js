import React from 'react'
import Head from '../components/head'
import Layout from '../components/layout'
import homeStyles from './index.module.scss'
import { FaBeer, FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const IndexPage = () => {
  const concerts = useStaticQuery(graphql`
    query {
      allContentfulConcerts {
        edges {
          node {
            concertName
            announcementDate(formatString: "Do MMMM YYYY")
            description { json }
            poster { 
              title 
              description
              file {
                url
              }
            }
          }
        }
      }
    }
`)

  const options = {
    renderNode: {
      // eslint-disable-next-line react/display-name
      'embedded-asset-block': (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      },
    }
  }

    
  console.log('@@@@@@@ concerts @@@@@', concerts)
  return (
    <Layout>
      <Head title="Home"/>
      <div className={homeStyles.background}>
        <h1>Hello</h1>
        <FaTwitter style={{color:'blue', fontSize: '1.5rem'}} />
        <FaFacebook style={{color:'blue', fontSize: '1.5rem'}} />
        <FaInstagram style={{color:'blue', fontSize: '1.5rem'}} />
        <p> Lets go for a <FaBeer style={{color: 'red', fontSize: '1.5rem'}}  />? </p>
        {/* <img src="https://res.cloudinary.com/danielmeilleurimg/image/upload/v1555399164/echos/regards_sourires-650x350.jpg" alt="mon image"/> */}
      </div>
      <button>Nos concerts</button>
      <div>
        <img src={concerts.allContentfulConcerts.edges[0].node.poster.file.url} />
        <p>{concerts.allContentfulConcerts.edges[0].node.concertName}</p>
        <p>{concerts.allContentfulConcerts.edges[0].node.announcementDate}</p>
        { documentToReactComponents(concerts.allContentfulConcerts.edges[0].node.description.json, options)}
      </div>
    </Layout>
  )
}
export default IndexPage