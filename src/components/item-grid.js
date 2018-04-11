import React from 'react'
import styled from 'styled-components'

const ItemGrid = styled.div`
  display: grid;
  margin-top: 5rem;
  grid-template-columns: 1fr;
  grid-template-areas:
      'icon'
      'title'
      'body'
      'side';

  @media (min-width: 768px) {
    grid-template-columns: 1.25fr 3fr .75fr 2fr ;
    grid-template-areas:
        'icon icon icon icon icon '
        'title title title title title'
        '. body . side side';
  }
`;

export default ItemGrid

