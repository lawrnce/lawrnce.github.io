import React from 'react'

import TopDescription from '../../components/top-description'
import ProductPanel from '../../components/product-panel'
import products from '../../data/products'

export default () =>
 <div>
   <h1>Available in the App Store</h1>
    Fo shizzle crazy dolor sit hizzle, phat adipiscing elit. Nullam that's the shizzle velizzle, aliquet boom shackalack, rizzle quis, yippiyo vel, arcu. Pellentesque eget own yo'. Sizzle erizzle. Gangster izzle dolor dapibus turpis tempizzle tempizzle. Check it out brizzle nibh et turpizzle. We gonna chung in crunk. Ma nizzle eleifend rhoncizzle doggy. Personal projects that I have shipped!

  {products.map(product => <ProductPanel product={ product } />)}

 </div>

