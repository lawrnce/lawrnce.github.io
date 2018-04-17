import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import ItemGrid from './item-grid'
import BlueText from './blue-text'
import OutboundLink from './outbound-link'

const Icon = styled.img`
  grid-area: icon;
  display: block;
  width: 180px;
  height: 180px;
  margin-right: auto;
  margin-left: auto;
`;

const Title = styled.h1`
  grid-area: title;
  display: block;
  text-align: center;
  margin-top: 0;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

const Body = styled.div`
  grid-area: body;
  color: black;
  text-decoration: none;
`;

const ProductLink = styled(OutboundLink)`
display: block;
`;

const Side = styled.div`
  grid-area: side;
  margin-top: 24px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    margin-top: 6px;
  }
`;

const BadgeLink = styled(OutboundLink)`
`;

const BadgeIcon = styled.img`
  display: block;
  width: 180px;
  height: auto;
`;

const Product = ({ product }) =>
  <ItemGrid>
    <Icon src={ product.icon } />

    <Title>
        { product.title }
    </Title>

    <Body>
      { product.description }<br />
      <ProductLink to={ product.url }>
        <BlueText>More info.</BlueText>
      </ProductLink>
    </Body>

    <Side>
      {product.badges.map( badgeItem =>
        <BadgeLink to={ badgeItem.url }>
          <BadgeIcon src={ badgeItem.icon } />
        </BadgeLink>
      )}
    </Side>
  </ItemGrid>

export default Product

