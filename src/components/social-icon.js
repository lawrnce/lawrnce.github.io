import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

const Icon = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 2.5rem;
  height: 2.5rem;

  @media (min-width: 700px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const SocialIcon = ({ className, name }) => {
  const src = require(`../assets/svg/${name}.svg`);

  return (
    <Icon src={src} className={ className } alt={`${name} icon`} />
  );
}

export default SocialIcon

