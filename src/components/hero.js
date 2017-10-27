import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
      'icon'
      'statement';

  @media (min-width: 768px) {
    grid-template-columns: 1.25fr 3fr 1.25fr;
    grid-template-areas:
        'icon icon icon'
        '. statement .';
  }
`;

const Icon = styled.img`
  grid-area: icon;
  width: 100px;
  height: 100px;
  margin: 10rem auto 3rem auto;
`;

const Statement = styled.p`
  grid-area: statement;
  text-align: justify;
  font-size: 24px;
  line-height: 30px;
`;

const Hero = ({ props }) =>
  <Grid>
    <Icon src={ require('../assets/img/panda.png') } />

    <Statement>
Hi my name is Lawrence, and I like making products. My goal is to be proficient in both engineering and design in order to effectively communicate across dynamic product teams. Below are my personal projects consisting of prototypes, libraries, and apps in the AppStore.
    </Statement>
  </Grid>

export default Hero

