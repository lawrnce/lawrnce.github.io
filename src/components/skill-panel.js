import React from 'react'
import styled from 'styled-components'

import TextLink from './text-link'
import OutboundLink from './outbound-link'

const Wrapper = styled.div`
  margin-bottom: 5rem;
`;

const Title = styled.h2`
  margin-bottom: 0;

  @media (min-width: 700px) {
    padding-left: 2rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 auto;
  margin-bottom: 3rem;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

const Image = styled.img`
  margin: 0 auto 0 auto;
  padding: 2.5rem 0 2.5rem 0;
  width: 90px;
  height: 90px;

  @media (min-width: 700px) {
    margin: 0 0 0 0;
  }
`;

const Description = styled.div`
  width: 100%;

  @media (min-width: 700px) {
    padding: 2.5rem 0 0 3rem;
    width: 50%;
  }
`;

const Summary = styled.p`
  margin: 0 0 1rem 0;
`;

const SkillSetList = styled.ul`
  padding: 0 0 0 0.25rem;
`;

const SkillSetListElement = styled.li`
  display: flex;
  width: 50%;
  float: left;
  margin-bottom: 0.75rem;

  @media (min-width: 700px) {
    width: 100%;
  }
`;

const SkillSetElementImage = styled.img`
  width: 1rem;
  height: 1rem;
`;

const SkillSetItemTitle = styled.p`
  margin: 0 0 0 0.5rem;
`;

const SkillSets = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

const SkillSetWrapper = styled.div`
  @media (min-width: 700px) {
    width: 50%;
  }
`;

const ProjectDescription = styled.p`
  margin: 0.5rem 0 0 0;
`;

const ProjectLink = styled(TextLink)`
  font-size: 17px;
`;

const Projects = styled.div`
  padding-left: 1rem;

  @media (min-width: 700px) {
    padding-left: 2rem;
  }
`;

const SkillSetItem = ({ skillSetItem }) =>
  <SkillSetListElement>
    <SkillSetElementImage src={ skillSetItem.image }/> <SkillSetItemTitle>{ skillSetItem.title }</SkillSetItemTitle>
  </SkillSetListElement>

const SkillSet = ({ skillSet }) =>
  <SkillSetWrapper>
    <h3>{ skillSet.title }</h3>
    <SkillSetList>
      { skillSet.items.map(skillSetItem => <SkillSetItem skillSetItem={ skillSetItem }/>) }
    </SkillSetList>
  </SkillSetWrapper>

const Project = ({ project }) =>
  <div>
    <ProjectLink to={`/technical/${ project.slug }`}>
      { project.title }
    </ProjectLink>
    <ProjectDescription>
      { project.description }
      <OutboundLink to={ project.url }>
        &nbsp;More Info.
      </OutboundLink>
    </ProjectDescription>
  </div>

const SkillPanel = ({ skill }) =>
  <Wrapper>
    <Title>{ skill.title }</Title>
    <Info>
      <Image src={ skill.image } />

      <Description>

        <Summary>
          { skill.summary }
        </Summary>

        <SkillSets>
          { skill.skillSets.map(skillSet => <SkillSet skillSet={ skillSet } />) }
        </SkillSets>

        <div>
          <h3>Projects</h3>
          <Projects>
            { skill.projects.map(project => <Project project={ project } />) }
          </Projects>
        </div>

      </Description>
    </Info>
  </Wrapper>

export default SkillPanel

