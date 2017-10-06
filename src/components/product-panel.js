import React from 'react'
import styled from 'styled-components'

import TextLink from './text-link'

const Product = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 auto;
  padding: 3rem 0 0 0;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Icon = styled.img`
  margin: 0 auto 0 auto;
  width: 120px;
  height: 120px;

  @media (min-width: 700px) {
    margin: 0 0 0 0;
  }
`;

const DescriptionWrapper = styled.div`
  padding: 27px 0 0 0;
  width: 100%;

  @media (min-width: 700px) {
    padding: 0 0 0 8rem;
    width: 60%;
  }
`;

const Description = ({ product }) =>
  <DescriptionWrapper>
    <p>
      { product.description }
      <TextLink to={`/products/${ product.slug }`}> More info.</TextLink>
    </p>
    <TextLink href={ product.link } target='_blank'>Visit App Store</TextLink>
  </DescriptionWrapper>

const ProductPanel = ({ product }) =>
  <div>
    <h2>{ product.name }</h2>
    <Product>
      <Icon src={ product.image } />
      <Description product={ product } />
    </Product>
  </div>

export default ProductPanel

