/* eslint-disable react/prop-types */

import Redcommended from './Recommend/Redcommended'
import Products from './Products/Products'
const ProductSection = ({result,handleRecommend}) => {
  
  return (
  <div className='mx-auto container w-5/6 '>
      <Redcommended handleRecommend={handleRecommend}/>
      <Products result={result}/>
        
    </div>
  )
}

export default ProductSection