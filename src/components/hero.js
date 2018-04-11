import React from 'react'
import styled from 'styled-components'

const HeroDiv = styled.div`
  position: relative;
  width: 480px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
`;

const StatementDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 10px;
  width: 100%;
  height: 100%;
`;

const LargeHeader = styled.h1`
  font-size: 132px;
  height: auto;
  margin: 0 0 0 0;
  color: white;
  @media (max-width: 480px) {
    font-size: 82px;
  }
`;

const SmallHeader = styled.h2`
  font-size: 98px;
  height: auto;
  margin: 0 0 0 0;
  color: white;
  @media (max-width: 480px) {
    font-size: 62px;
  }
`;

const Hero = ({ props }) =>
  <HeroDiv>
    <HeroVideo autoplay loop src={ require('../assets/mp4/20180409.mp4') }/>

    <StatementDiv>
      <LargeHeader>I make</LargeHeader>
      <SmallHeader>
        Software<br />Music<br />Games
      </SmallHeader>
    </StatementDiv>
  </HeroDiv>

export default Hero

