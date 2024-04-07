/* eslint-disable react/prop-types */
import Input from "../Customize/Input/Input"

// Icons
import { FiUser } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";


const NavBar = ({handleInputChange,Query}) => {
  return (
    <div className="flex justify-around items-baseline h-[3rem]  my-8 border-b  border-gray-300">
      <Input handleInputChange={handleInputChange} Query={Query}/>

      <div className="flex gap-5 text-[19px] ">
        <a href="#" className="hover:text-black/50"><FiHeart /></a>
        <a href="#" className="hover:text-black/50"><FiShoppingBag /></a>
        <a href="#" className="hover:text-black/50"><FiUser /></a>
      </div>
    </div>
  )
}

export default NavBar