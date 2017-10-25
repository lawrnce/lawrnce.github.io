import React from 'react'
import styled from 'styled-components'

import Hero from '../components/hero'
import Skill from '../components/skill'
import Product from '../components/product'

import products from '../data/products'
import skills from '../data/skills'

const IndexPage = () => (
  <div>

    <Hero />

    {products.map(product => <Product product={ product } />)}

    <Skill skill={ skills['iOS'] } />
    <Skill skill={ skills['game'] } />
    <Skill skill={ skills['web'] } />
    <Skill skill={ skills['design'] } />
    <Skill skill={ skills['music'] } />
    <Skill skill={ skills['pixel'] } />
  </div>
)

export default IndexPage

