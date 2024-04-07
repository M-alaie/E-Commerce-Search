import Category from "./Category/Category"
import Price from "./Price/Price"
import Colors from './Colors/Colors'

const SideBarSection = ({handleSidebar}) => {
  return (
    <div className=" h-full mb-8 w-[20%] md:w-[15%] overflow-auto fixed   flex flex-col border-r border-solid border-r-[#ccc]  items-center  z-10">
     <div className="mb-4 ">
     <h1 className="mt-3">🛒</h1>
     </div>
     <hr className="bg-gray-300/70 h-[1.5px] w-full absolute top-[79px]" />
   
      <Category handleSidebar={handleSidebar}/>
   
   
      <Price handleSidebar={handleSidebar}/>
      <Colors handleSidebar={handleSidebar}/>
 
     
    </div>
  )
}

export default SideBarSection