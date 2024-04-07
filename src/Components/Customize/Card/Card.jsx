/* eslint-disable react/prop-types */

import {BsFillBagHeartFill} from 'react-icons/bs'

const Card = ({ img, title, star, reviews, prevPrice, newPrice ,index}) => {
 
  
  return ( 
          <div key={index} className="p-3 border space-y-3  border-solid shadow-md hover:shadow-xl border-gray-150">
          <div className='w-full mb-1' >
            <img src={img} className='w-52' alt="" />
          </div>
          <div>
            
          <p className='text-[16px] font-semibold'>{title}</p>
            <div className='flex justify-start items-baseline'>
              <span>{star}</span>
              <span>{star}</span>
              <span>{star}</span>
              <span>{star}</span>

              <span className='text-gray-800/40'>{reviews}</span>
            </div>
            <div className='flex justify-between items-center'>
             <div className='flex justify-start items-baseline'>
            
             <del className='text-sm text-red-500 font-semibold'>{prevPrice}</del>
              <p className='text-base ml-1 font-medium '>${newPrice}</p>
            
             </div>
              <div className='text-black/85 hover:text-black/40'>
               <BsFillBagHeartFill/>
              </div>
            </div>
          </div>

          
        </div> 
          
     
     
     
  )
}

export default Card