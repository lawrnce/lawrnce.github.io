import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  @media (min-width: 700px) {
    padding-left: 1rem;
  }
`;

const DescriptionWrapper = styled.p`
  @media (min-width: 700px) {
    padding: 0 5rem 0 4rem;
  }
`;

const TopDescription = ({ info }) =>
  <Wrapper>
    <Title>
      { info.title }
    </Title>
    <DescriptionWrapper>
      { info.description }
    </DescriptionWrapper>
  </Wrapper>

export default TopDescription

