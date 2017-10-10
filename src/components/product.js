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
    grid-template-columns: repeat( 2, 1fr );
    grid-template-areas:
        'icon title'
        'icon description'
        'icon appStore'
        '. appStore';
  }
`;

const IconLink = styled(Link)`
  grid-area: icon;
  padding: 0 0 0 0;

  margin: 0 auto 0 auto;
`;

const Icon = styled.img`
  width: 240px;
  height: 240px;

  @media (min-width: 768px) {
    padding-left: 3rem;
  }
`;

const Title = styled.h1`
  grid-area: title;
  margin-bottom: 0;
  margin-top: 0;
`;

const Description = styled.p`
  grid-area: description;
  margin: 0 0 0 0;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const AppStoreIcon = styled.img`
  grid-area: appStore;
  margin-top: 1.5rem;
`;

const Product = ({ product }) =>
  <Grid>
    <IconLink to={`/products/${ product.slug }`}>
      <Icon src={ product.icon } />
    </IconLink>

    <Title>{ product.title }</Title>

    <Description>
      { product.description }
      <TextLink to={`/products/${ product.slug }`}>More info.</TextLink>
    </Description>

    <OutboundLink to={ product.url }>
      <AppStoreIcon src={ product.appStoreIcon } />
    </OutboundLink>
  </Grid>

export default Product

