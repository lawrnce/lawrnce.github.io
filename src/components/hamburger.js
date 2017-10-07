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
    this.props.onToggleMenu(!open)
  }

  render() {
    return (
      <HamburgerMenu
        isOpen={this.state.open}
        menuClicked={this.handleClick.bind(this)}
        width={20}
        height={10}
        strokeWidth={1}
        rotate={0}
        color='black'
        borderRadius={0}
        animationDuration='0.2'
      />
    );
  }
}

export default Hamburger

