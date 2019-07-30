import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = ({pageContext: { locale }}) => {
  return (
    <Layout path="/about" locale={locale}>
      <Head title="About"/>
      <section className="section" style={{'paddingTop': 0}} >
        <div className="columns">
          <div className="column"></div>
          <div className="column is-four-fifths">
            <div className="content">
              <h1>About</h1>
              <p>This is the about page.  Place to talk about choir story, location, etc.
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque felis nunc, vestibulum non orci vel, egestas maximus nunc.
                    Mauris sapien ante, sollicitudin at fringilla sed, sollicitudin vel mauris.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nam ullamcorper a elit sed volutpat.
              </p>
              <p>
                Vivamus ac maximus arcu, sed semper velit.
                Ut lobortis erat id massa varius, eu ullamcorper ligula tincidunt.
                Aliquam suscipit at neque quis ullamcorper. Suspendisse tempus sem diam, nec mollis enim euismod a.
                Nullam tempor, velit sit amet ultrices cursus, quam erat vulputate augue, in ultricies dolor leo id lacus.
                Aliquam a ipsum efficitur, finibus augue vel, iaculis massa.
                Fusce auctor eros a leo auctor, eget lacinia tellus malesuada. Quisque hendrerit volutpat nulla id imperdiet.
                Donec dapibus quis purus ut imperdiet. Maecenas congue, turpis eget consectetur mollis,
                 risus nunc consequat dui, at faucibus risus risus ac sem.
              </p>
              <p>Ut sollicitudin condimentum nibh quis malesuada. Sed sit amet ante
                sit amet augue ultricies mollis ac a mauris. Curabitur porttitor urna urna,
                eget porttitor ipsum condimentum quis. Vestibulum interdum non mauris quis tempor.
                Duis scelerisque ex purus, rutrum egestas est sollicitudin sit amet. Donec ligula nibh,
                placerat quis velit vitae, efficitur vehicula velit. Nulla consectetur non arcu vel gravida.
                Pellentesque sit amet ligula eu nunc hendrerit tempor ullamcorper id quam. Etiam vehicula,
                turpis non rhoncus sodales, massa dui luctus libero, ac porta lorem eros at sapien.
                Donec faucibus nisl orci, ut tincidunt tellus faucibus imperdiet. Duis ac consequat dui.
              </p>
              <p>Praesent sit amet enim lectus. Aenean vitae congue sapien. Mauris elementum mauris vitae
                suscipit dignissim. Aenean finibus odio at fermentum varius. Donec aliquam elit at semper fermentum.
                 Donec sodales condimentum turpis ut commodo. Aliquam mollis dignissim magna, et dignissim leo.
                 Nam erat justo, blandit vel suscipit a, pulvinar a sapien. Interdum et malesuada fames ac ante ipsum
                 primis in faucibus. Cras faucibus a nibh a scelerisque. Class aptent taciti sociosqu ad litora torquent
                 per conubia nostra, per inceptos himenaeos. Nam ante magna, dapibus ut risus dignissim,
                 ullamcorper semper nisl.
              </p>
              <p><Link to="/contact">Venez à nos pratiques.</Link>
              </p>

            </div>
          </div>
          <div className="column"></div>
        </div>
      </section>
    </Layout>
  )
}
export default AboutPage
