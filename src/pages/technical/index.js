import React from 'react'

import TopDescription from '../../components/top-description'
import Skill from '../../components/skill'
import descriptions from '../../data/descriptions'
import skills from '../../data/skills'

export default () =>
 <div>
  <Skill skill={ skills['iOS'] } />
  <Skill skill={ skills['web'] } />
  <Skill skill={ skills['game'] } />
 </div>

