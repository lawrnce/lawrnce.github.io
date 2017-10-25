import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import ItemGrid from './item-grid'
import BlueText from './blue-text'
import OutboundLink from './outbound-link'

const ProductLink = styled(Link)`
  color: black;
  text-decoration: none;
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
  grid-area: body;
`;

const AppStoreIcon = styled(OutboundLink)`
  grid-area: side;
  margin: 16px auto 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    margin: 16px 0 0 0;
  }
`;

const Product = ({ product }) =>
  <ItemGrid>
    <IconLink to={`/${ product.slug }`}>
      <Icon src={ product.icon } />
    </IconLink>

    <Title>
      <ProductLink to={`/${ product.slug }`}>
          { product.title }
      </ProductLink>
    </Title>

    <Description>
      <ProductLink to={`/${ product.slug }`}>
        { product.description }<br />
        <BlueText to={`/products/${ product.slug }`}>More info.</BlueText>
      </ProductLink>
    </Description>

    <AppStoreIcon to={ product.url }>
      <img src={ product.appStoreIcon } />
    </AppStoreIcon>
  </ItemGrid>

export default Product

