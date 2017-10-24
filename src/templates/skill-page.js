import React from 'react'

import TextLink from '../components/text-link'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <TextLink to="/products">Back</TextLink>
      <h1>
        {post.frontmatter.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
  query SkillPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

