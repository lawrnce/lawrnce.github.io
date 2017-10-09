import React from 'react'

import ProductPanel from '../../components/product-panel'
import products from '../../data/products'
import descriptions from '../../data/descriptions'

export default () =>
 <div>
  {products.map(product => <ProductPanel product={ product } />)}
 </div>

