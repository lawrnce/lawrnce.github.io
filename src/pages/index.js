import React from 'react'

import Skill from '../components/skill'
import Product from '../components/product'

import products from '../data/products'
import skills from '../data/skills'

const IndexPage = () => (
  <div>
    <h1>Who I am</h1>
    <p>I am a creative technical dude. Here are the things I made, and here are the things I know.</p>
    {products.map(product => <Product product={ product } />)}
    <Skill skill={ skills['iOS'] } />
    <Skill skill={ skills['web'] } />
    <Skill skill={ skills['game'] } />
    <Skill skill={ skills['design'] } />
    <Skill skill={ skills['music'] } />
    <Skill skill={ skills['pixel'] } />
  </div>
)

export default IndexPage

