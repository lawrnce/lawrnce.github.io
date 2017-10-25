import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
      'icon'
      'statement';

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
        'icon icon icon icon icon'
        '. statement statement statement .';
  }
`;

const Icon = styled.img`
  grid-area: icon;
  width: 100px;
  height: 100px;
  margin: 0 auto 0 auto;
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
      The quick brown fox jumps over the lazy dog.
      The quick brown fox jumps over the lazy dog.
      The quick brown fox jumps over the lazy dog.
      The quick brown fox jumps over the lazy dog.
    </Statement>
  </Grid>

export default Hero

