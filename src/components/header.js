import React from 'react'
import styled from 'styled-components'

const Logo = styled.h1`
  grid-area: logo;
  text-align: center;
  font-size: 2rem;
`;

const Header = () =>
  <Logo>
    Lawrence Tran
  </Logo>

export default Header

