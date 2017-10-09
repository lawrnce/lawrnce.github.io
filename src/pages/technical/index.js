import React from 'react'

import Skill from '../../components/skill'
import skills from '../../data/skills'

export default () =>
 <div>
  <Skill skill={ skills['iOS'] } />
  <Skill skill={ skills['web'] } />
  <Skill skill={ skills['game'] } />
 </div>

