import React from 'react'
import styled from 'styled-components'

import OutboundLink from './outbound-link'

const Grid = styled.div`
  display: grid;
  margin-top: 5rem;
  grid-template-columns: 1fr;
  grid-template-areas:
      'banner'
      'title'
      'description'
      'projects'
      'skills';

  @media (min-width: 700px) {
    padding-right: 3rem;
    padding-left: 3rem;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
        'banner banner banner banner banner '
        '. title title title title '
        '. description description . skills'
        '. projects projects . skills';
  }
`;

const BannerImage = styled.img`
  grid-area: banner;
  width: 100%;
  height: auto;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 700px) {
    width: 50%;
    margin-bottom: 3rem;
  }
`;

const Title = styled.h1`
  grid-area: title;
  margin-bottom: 0;
`;

const Description = styled.p`
  grid-area: description;
`;

const SkillGrid = styled.div`
  grid-area: skills;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 25px;
  grid-gap: 0.5rem;

  @media (min-width: 700px) {
    margin-top: 16px;
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
  <Grid>
    <BannerImage src={ skill.image } />

    <Title>{ skill.title }</Title>

    <Description>{ skill.description }</Description>


    <ProjectGrid>
      {skill.projects.map( project =>
        <p>
          <OutboundLink to={ project.url }>{ project.title }</OutboundLink><br />
          { project.description }
        </p>
      )}
    </ProjectGrid>

    <SkillGrid>
      {skill.items.map( skillItem =>
          <SkillTitle>
            <SkillImage src={ skillItem.image }/>
            { skillItem.title }
          </SkillTitle>
      )}
    </SkillGrid>

  </Grid>

export default Skill

