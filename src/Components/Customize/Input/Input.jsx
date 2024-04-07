/* eslint-disable react/prop-types */


const Input = ({handleInputChange,Query}) => {
  
    return (
        <div>
            <input type="text" placeholder='Enter your Search Shoes' value={Query} onChange={handleInputChange}  aria-label='Shoes' className='border-none w-[14rem] p-2 outline-none rounded-md bg-gray-200/70 px-4 placeholder:text-black/70 text-sm'  />
        </div>
    )
}

export default Input