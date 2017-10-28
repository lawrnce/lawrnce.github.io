import React from 'react';
import styled from 'styled-components'

import SocialIcon from './social-icon';
import OutboundLink from './outbound-link';
import BlueText from './blue-text'

const Wrapper = styled.div`
  margin-top: 3rem;

  @media (min-width: 700px) {
    margin-top: 5rem;
  }
`;

const Message = styled.p`
  text-align: center;
  line-height: 1.4rem;
  font-size: 16px;
`;

const IconList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 auto 0 auto;
  justify-content: center;
  padding: 0 0 0 0;
`;

const IconElement = styled.li`
  padding: 1rem 1rem 0 1rem;
`;

const Contact = props =>
  <Wrapper>
    <IconList>
      <IconElement>
        <OutboundLink to="https://github.com/lawrnce/">
          <SocialIcon name="github" />
        </OutboundLink>
      </IconElement>
    </IconList>

    <Message>
      <OutboundLink to="mailto:lawrence.c.tran@outlook.com">
        <BlueText>Email</BlueText>
      </OutboundLink>
      &nbsp;for resume.<br/>
    </Message>
  </Wrapper>

export default Contact

