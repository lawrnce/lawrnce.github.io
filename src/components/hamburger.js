import React from 'react'
import HamburgerMenu from 'react-hamburger-menu'

class Hamburger extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  handleClick(id) {
    let { open } = this.state;
    this.setState({
      open: !open
    });
  }

  render() {
    return (
      <HamburgerMenu
      isOpen={this.state.open}
      menuClicked={this.handleClick.bind(this, 3)}
      width={18}
      height={15}
      strokeWidth={1}
      rotate={0}
      color='black'
      borderRadius={0}
      animationDuration='0.5'
      />
    );
  }
}

export default Hamburger

