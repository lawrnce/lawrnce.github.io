import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-template-columns: 1fr;
  grid-template-areas:
    'banner'
    'description';
`;

const Banner = styled.div`
  grid-area: banner;
  width: 100%;
  height: auto;
  line-height: 0;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    '1 2'
    'name name'
    '3 4';

  @media (min-width: 480px) {
    width: 420px;
    margin-right: auto;
    margin-left: auto;
  }
`;

const Windmill1 = styled.img`
  grid-area: 1;
  width: 50%;
  height: auto;
  margin: 0 0 0 0;
`;

const Windmill2 = styled.img`
  grid-area: 2;
  width: 50%;
  margin: 0 0 0 0;
`;

const Windmill3 = styled.img`
  grid-area: 3;
  width: 50%;
  margin: 0 0 0 0;
`;

const Windmill4 = styled.img`
  grid-area: 4;
  width: 50%;
  margin: 0 0 0 0;
`;

const Name = styled.img`
  grid-area: name;
  width: 100%;
  margin: 0 0 0 0;
`;

const Description = styled.h1`
  grid-area: 4;
  text-align: center;
  margin-right: 16px;
  margin-left: 16px;
`;

const Hero = ({ props }) =>
  <Wrapper>
    <Banner>
      <Windmill1 src={ require('../assets/gif/windmill-1.gif') } />
      <Windmill2 src={ require('../assets/gif/windmill-2.gif') } />
      <Name src={ require('../assets/gif/name.gif') } />
      <Windmill3 src={ require('../assets/gif/windmill-3.gif') } />
      <Windmill4 src={ require('../assets/gif/windmill-4.gif') } />
    </Banner>
    <Description>
      I make music, apps, and games.
    </Description>
  </Wrapper>

export default Hero

