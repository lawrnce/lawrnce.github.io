import styled from 'styled-components'

const Wrapper = styled.div`

`;

const DescriptionWrapper = styled.p`
  @media (min-width: 700px) {
    padding: 0 5rem 0 4rem;
  }
`;

const TopDescription = ({ info }) =>
  <Wrapper>
    <h1>{ info.title }</h1>
    <DescriptionWrapper>{ info.description }</DescriptionWrapper>
  </Wrapper>

export default TopDescription

