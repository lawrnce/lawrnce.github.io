import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from "styled-components"

import Header from '../components/header'
import Contact from '../components/contact'

require('prismjs/themes/prism-solarizedlight.css')

const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: none;

  @media (min-width: 700px) {
    margin-top: 0;
  }
`;

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Lawrence Tran"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <MainWrapper>
      <Header />
      {children()}
      <Contact />
    </MainWrapper>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

