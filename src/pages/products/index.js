import React from 'react'

import ProductPanel from '../../components/product'
import products from '../../data/products'

export default () =>
 <div>
  {products.map(product => <ProductPanel product={ product } />)}
 </div>

