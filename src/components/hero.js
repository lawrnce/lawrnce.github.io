import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'icon';
`;

const Banner = styled.img`
  grid-area: icon;
  width: 100%;
  height: auto;

  @media (min-width: 480px) {
    width: 420px;
    margin-right: auto;
    margin-left: auto;
  }
`;

const Description = styled.h1`
  text-align: center;
`;

const Hero = ({ props }) =>
  <Wrapper>
    <Banner src={ require('../assets/gif/lawrencetran.gif') } />
    <Description>
      I make music, apps, and games.
    </Description>
  </Wrapper>

export default Hero

