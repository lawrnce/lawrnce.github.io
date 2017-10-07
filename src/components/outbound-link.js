import React from 'react';
import styled from 'styled-components'

const Link = styled.a`
  color: #007AFF;
  text-decoration: none;
  font-weight: lighter;
`;

const OutboundLink = props => (
  <Link {...props} href={props.to} target="_blank" rel="noopener noreferrer">{props.children}</Link>
);

export default OutboundLink;

