import React from 'react'

import TopDescription from '../../components/top-description'
import SkillPanel from '../../components/skill-panel'
import descriptions from '../../data/descriptions'
import skills from '../../data/skills'

export default () =>
 <div>
  <TopDescription info={ descriptions['technical'] } />
  <SkillPanel skill={ skills['iOS'] } />
  <SkillPanel skill={ skills['frontend'] } />
 </div>

