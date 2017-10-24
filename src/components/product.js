import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import TextLink from './text-link'
import OutboundLink from './outbound-link'

const Grid = styled.div`
  display: grid;
  margin-top: 5rem;
  grid-template-columns: 1fr;
  grid-template-areas:
      'icon'
      'title'
      'description'
      'appStore';

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
        'icon icon icon icon icon'
        '. title title title title'
        '. description description  appStore appStore';
  }
`;

const IconLink = styled(Link)`
  grid-area: icon;
  padding: 0 0 0 0;
  margin: 0 auto 0 auto;
`;

const Icon = styled.img`
  width: 120px;
  height: 120px;
`;

const Title = styled.h1`
  grid-area: title;
  margin-top: 3rem;
  margin-bottom: 0;
`;

const Description = styled.p`
  grid-area: description;
`;

const AppStoreIcon = styled(OutboundLink)`
  grid-area: appStore;
  margin: 16px auto 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    margin-left: 5rem;
  }
`;

const Product = ({ product }) =>
  <Grid>
    <IconLink to={`/products/${ product.slug }`}>
      <Icon src={ product.icon } />
    </IconLink>

    <Title>{ product.title }</Title>
    <Description>
      { product.description }<br />
      <TextLink to={`/products/${ product.slug }`}>More info.</TextLink>
    </Description>

    <AppStoreIcon to={ product.url }>
      <img src={ product.appStoreIcon } />
    </AppStoreIcon>
  </Grid>

export default Product

