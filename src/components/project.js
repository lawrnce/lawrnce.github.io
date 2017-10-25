import React from 'react'
import styled from 'styled-components'

import OutboundLink from './outbound-link'
import BlueText from './blue-text'

function Project(props) {
  const url = props.project.url;
  const title = props.project.title;
  const slug = props.project.slug;
  const description = props.project.description;

  return (
    <OutboundLink to={ url }>
      <p>
        <BlueText>
          { title }
        </BlueText>
        <br />
        { description }
      </p>
    </OutboundLink>
  );
}

export default Project;

