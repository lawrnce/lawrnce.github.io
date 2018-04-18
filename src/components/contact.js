import React from 'react';
import styled from 'styled-components'

import SocialIcon from './social-icon';
import OutboundLink from './outbound-link';
import BlueText from './blue-text'

const Wrapper = styled.div`
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 6rem;

  @media (min-width: 700px) {
    margin-top: 5rem;
  }
`;

const Button = styled(OutboundLink)`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;
`
const Contact = props =>
  <Wrapper>
    <Button to="https://www.instagram.com/lawrencetran/">
      Instagram
    </Button>
    <Button to="https://www.vimeo.com/lawrencetran/">
      Vimeo
    </Button>
    <Button to="mailto:contact@lawrencetran.co">
      Email
    </Button>
  </Wrapper>

export default Contact

