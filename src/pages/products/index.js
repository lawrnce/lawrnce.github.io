import React from 'react'

import Product from '../../components/product'
import products from '../../data/products'

export default () =>
 <div>
  {products.map(product => <Product product={ product } />)}
 </div>

