import React from 'react'

import Skill from '../../components/skill'
import skills from '../../data/skills'

export default () =>
  <div>
    <Skill skill={ skills['design'] } />
    <Skill skill={ skills['music'] } />
    <Skill skill={ skills['pixel'] } />
  </div>

