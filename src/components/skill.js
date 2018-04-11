import React from 'react'
import styled from 'styled-components'

import ItemGrid from './item-grid'
import Project from './project'

const HeaderVideo = styled.video`
  grid-area: icon;
  margin-right: auto;
  margin-left: auto;
`;

const Title = styled.h1`
  grid-area: title;
  text-align: center;
  margin-top: 1em;
  margin-bottom: 1.5em;
`;

const Body = styled.div`
  grid-area: body;
`;

const Side = styled.div`
  grid-area: side;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 25px;
  grid-gap: 0.5rem;
  margin-top: 16px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillImage = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  vertical-align: text-bottom;
`;

const SkillTitle = styled.p`
  margin: 0 0 0 0;
  font-size: 0.9rem;
  line-height: 25px;
`;

const ProjectGrid = styled.div`
  grid-area: projects;
  display: grid;
`;

const Skill = ({ skill }) =>
  <ItemGrid>
    <HeaderVideo autoplay preload="auto" src={ skill.headerVideo } />

    <Title>{ skill.title }</Title>

    <Body>
      <p>{ skill.description }</p>

      <ProjectGrid>
        {skill.projects.map( project =>
          <Project project={ project } />
        )}
      </ProjectGrid>
    </Body>

    <Side>
      {skill.items.map( skillItem =>
          <SkillTitle>
            <SkillImage src={ skillItem.image }/>
            { skillItem.title }
          </SkillTitle>
      )}
    </Side>

 </ItemGrid>

export default Skill

