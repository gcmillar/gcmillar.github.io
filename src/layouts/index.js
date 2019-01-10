import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import './index.css'


const Header = () =>

   <nav className='mw8 db center' >
        <div className="dt-l w-100 border-box pa3 pt4">
        
          <Link className="db dtc-l v-mid link hover-orange tc tl-l mb0-l mb2 b" to="/" title="Home">Garrett C. Millar</Link>
          <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
            <a className="link dib mr3-l mr0 hover-orange b" target='blank' href="gcmillar-cv.pdf">CV</a>
          </div>
        </div>
      </nav>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Garrett C Millar - UX/HCI Researcher & Geospatial Analyst"
      link={[
      { rel: 'apple-touch-icon', sizes: '57x57', href: 'favicon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: 'favicon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: 'favicon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: 'favicon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: 'favicon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: 'favicon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: 'favicon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: 'favicon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'favicon/apple-icon-180x180.png' },
      { rel: 'icon', type:'image/png', sizes: '192x192' , href: 'favicon/android-icon-192x192.png' },
      { rel: 'icon', type:'image/png', sizes: '32x32', href: 'favicon/favicon-32x32.png' },
      { rel: 'icon', type:'image/png', sizes: '96x96', href: 'favicon/favicon-96x96.png' },
      { rel: 'icon', type:'image/png', sizes: '16x16', href: 'favicon/favicon-16x16.png' },
      { rel: 'manifest', href: 'favicon/manifest.json'}
        ]}
      meta={[
        { name: 'description', content: 'UX/HCI Researcher & Geospatial Analyst. Creatively developing and evaluating geospatial applications and visualizations.' },
        { name: 'keywords', content: 'UX/HCI & Geospatial Analysis, Garrett Millar, UI/UX, User Interface Design, User Experiences Design, HTML, CSS, User Testing, Interaction Design, Front-end Development, Garrett' },
        { name: 'og:type', content: 'profile' },
        { name: 'og:title', content: 'Garrett C. Millar - UX/HCI Researcher & Geospatial Analyst' },
        { name: 'og:description', content: 'UX/HCI Researcher & Geospatial Analyst. Creatively developing and evaluating geospatial applications and visualizations.' },
        { name: 'og:url', content: 'https://gcmillar.github.io/' },
        { name: 'og:image', content: 'https://gcmillar.github.io/images/preview.png' },
        { name: 'profile:first_name', content: 'Garrett' },
        { name: 'profile:last_name', content: 'Millar' },
      ]}
    />
    <Header />
    <div className='center mw8 db ph3'>
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
