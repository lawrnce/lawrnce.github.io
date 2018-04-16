import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import ItemGrid from './item-grid'
import BlueText from './blue-text'
import OutboundLink from './outbound-link'

const ProductLink = styled(OutboundLink)`
  color: black;
  text-decoration: none;
`;

const IconLink = styled(OutboundLink)`
  grid-area: icon;
  padding: 0 0 0 0;
  margin: 0 auto 0 auto;
`;

const Icon = styled.img`
  width: 180px;
  height: 180px;
  margin-bottom: 0;
`;

const Title = styled.h1`
  grid-area: title;
  text-align: center;
  margin-top: 1em;
  margin-bottom: 1.5em;
`;

const Description = styled.p`
  grid-area: body;
`;

const Badges = styled.div`
  grid-area: side;
  width: 180px;
  margin: 6px auto 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    margin: 6px 0 0 0;
  }
`;

const BadgeLink = styled(OutboundLink)`
`;

const Product = ({ product }) =>
  <ItemGrid>
    <IconLink to={ product.url }>
      <Icon src={ product.icon } />
    </IconLink>

    <Title>
        { product.title }
    </Title>

    <Description>
      <ProductLink to={ product.url }>
        { product.description }<br />
        <BlueText>More info.</BlueText>
      </ProductLink>
    </Description>

    <Badges>
      {product.badges.map( badgeItem =>
        <BadgeLink to={ badgeItem.url }>
          <img src={ badgeItem.icon } />
        </BadgeLink>
      )}
    </Badges>
  </ItemGrid>

export default Product

