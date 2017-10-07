import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'

import Hamburger from './hamburger'
import styles from '../assets/css/menu.css'

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

const NavigationLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const DesktopNavigationList = styled.ul`
  list-style: none;
  margin: 0 0 0 0;
  justify-content: space-around;
  display: none;

  @media (min-width: 700px) {
    display: flex;
    margin: 0 0 0 2rem;
  }
`;

const MobileNavigationList = styled.ul`
  list-style: none;
  margin: 0 0 0 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    display: none;
  }
`;

const NavigationElement = styled.li`
  font-size: 20px;
  line-height: 48px;

  @media (min-width: 700px) {
    font-size: 20px;
    margin: 0 0 0 2rem;
    display: inline;
    vertical-align: sub;
    justify-content: space-around;
  }
`;

const MenuWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;

  @media (min-width: 700px) {
    display: none;
  }
`;

const HamburgerWrapper = styled.div`
  padding: 11px 6px 11px 6px;
`;

const MobileNavigationWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-color: red;
`;

const ListLink = props =>
  <NavigationElement>
    <NavigationLink to={props.to}>
      {props.children}
    </NavigationLink>
  </NavigationElement>

const DesktopNavigation = ({ children }) =>
  <DesktopNavigationList>
    <ListLink to="/products">Products</ListLink>
    <ListLink to="/technical">Technical</ListLink>
    <ListLink to="/creative">Creative</ListLink>
  </DesktopNavigationList>

const MobileNavigation = ({ children }) =>
  <MobileNavigationList>
    <ListLink to="/products">Products</ListLink>
    <ListLink to="/technical">Technical</ListLink>
    <ListLink to="/creative">Creative</ListLink>
  </MobileNavigationList>


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false
    };
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  }

  render() {
    const MobileMenu = ({ children }) =>
      <MenuWrapper>
        <HamburgerWrapper>
          <Hamburger onToggleMenu={ this.toggleMenu }/>
        </HamburgerWrapper>
      </MenuWrapper>

    let menu
    if (this.state.menuActive) {
      menu = <MobileNavigation />
    } else {
      menu = ""
    }

    return (
      <div>
        <HeaderWrapper>
          <Logo>
            <NavigationLink to="/">Lawrence Tran</NavigationLink>
          </Logo>
          <MobileMenu />
          <DesktopNavigation />
        </HeaderWrapper>
        <CSSTransitionGroup
          transitionName="menu"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={800}>
          { menu }
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Header

