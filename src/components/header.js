import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Hamburger from './hamburger'

const HeaderWrapper = styled.div`
  link: black;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  vertical-align: bottom;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.p`
  margin: 0;
  display: inline;
  color: black;
  font-size: 28px;
`;

const NavigationElement = styled.li`
  display: inline;
  vertical-align: sub;
  justify-content: space-around;

  @media (min-width: 700px) {
    margin: 0 0 0 2rem;
  }
`;

const NavigationLink = styled(Link)`
  color: black;
`;

const NavigationList = styled.ul`
  list-style: none;
  margin: 0 0 0 0;
  justify-content: space-around;
  display: none;

  @media (min-width: 700px) {
    display: flex;
    margin: 0 0 0 2rem;
  }
`;

const MenuWrapper = styled.div`
  width: 32px;
  height: 32px;

  @media (min-width: 700px) {
    display: none;
  }
`;

const MobileMenu = ({ children }) =>
  <MenuWrapper>
     <Hamburger />
  </MenuWrapper>

const ListLink = props =>
  <NavigationElement>
    <NavigationLink to={props.to}>
      {props.children}
    </NavigationLink>
  </NavigationElement>

const Navigation = ({ children }) =>
  <NavigationList>
    <ListLink to="/products">Products</ListLink>
    <ListLink to="/technical">Technical</ListLink>
    <ListLink to="/creative">Creative</ListLink>
  </NavigationList>

const Header = ({ children }) =>
  <HeaderWrapper>
    <Logo>
      <NavigationLink to="/">Lawrence Tran</NavigationLink>
    </Logo>
    <MobileMenu />
    <Navigation />
  </HeaderWrapper>

export default Header

