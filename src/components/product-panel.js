import React from 'react'
import styled from 'styled-components'

import TextLink from './text-link'

const Title = styled.h2`
  margin-bottom: 0;

  @media (min-width: 700px) {
    padding-left: 2rem;
  }
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 auto;
  margin-bottom: 3rem;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

const Icon = styled.img`
  margin: 0 auto 0 auto;
  padding: 2.5rem 0 2.5rem 0;
  width: 100px;
  height: 100px;

  @media (min-width: 700px) {
    margin: 0 0 0 0;
  }
`;

const DescriptionWrapper = styled.div`
  width: 100%;

  @media (min-width: 700px) {
    padding: 2.5rem 0 0 3rem;
    width: 60%;
  }
`;

const Text = styled.p`
  margin: 0 0 2rem 0;
`;

const Description = ({ product }) =>
  <DescriptionWrapper>
    <Text>
      { product.description }
      <TextLink to={`/products/${ product.slug }`}>More info.</TextLink>
    </Text>
    <TextLink href={ product.link } target='_blank'>Visit App Store</TextLink>
  </DescriptionWrapper>

const ProductPanel = ({ product }) =>
  <div>
    <Title>{ product.name }</Title>
    <Product>
      <Icon src={ product.image } />
      <Description product={ product } />
    </Product>
  </div>

export default ProductPanel

