import Input from "../Customize/Input"

// Icons
import { FiUser } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";


const NavBar = () => {
  return (
    <div className="flex justify-around items-baseline h-[3rem]  my-8 border-b  border-gray-300">
      <Input />

      <div className="flex gap-5 text-[19px] ">
        <a href="#" className="hover:text-black/50"><FiHeart /></a>
        <a href="#" className="hover:text-black/50"><FiShoppingBag /></a>
        <a href="#" className="hover:text-black/50"><FiUser /></a>
      </div>
    </div>
  )
}

export default NavBar