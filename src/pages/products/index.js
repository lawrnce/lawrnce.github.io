import React from 'react'

import TopDescription from '../../components/top-description'
import ProductPanel from '../../components/product-panel'
import products from '../../data/products'
import descriptions from '../../data/descriptions'

export default () =>
 <div>
  <TopDescription info={ descriptions['products'] } />
  {products.map(product => <ProductPanel product={ product } />)}
 </div>

