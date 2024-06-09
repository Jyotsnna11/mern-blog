
import { Navbar, NavbarCollapse, NavbarToggle, TextInput } from "flowbite-react";
import { Link,useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import 'flowbite/dist/flowbite.css';
import { Button } from "flowbite-react";

import { FaMoon } from "react-icons/fa"
export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2 flex items-center justify-between'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white px-2 py-1'>
          JYOs
        </span>
        Blog
      </Link>
      <div className='flex items-center'>
        <div className="relative hidden lg:block">
          <TextInput
            type='text'
            placeholder="Search..."
            
          />
          <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <Button className="w-12 h-10 lg:hidden ml-2 rounded-md flex items-center justify-center" color="gray">
          <AiOutlineSearch />
        </Button> 
      </div>
      <div className="flex gap-2 md:order-2 ">
        <Button className="w-12 h-10 hidden  sm:flex items-center justify-center" color='gray' pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
        <Button  gradientDuoTone="purpleToPink" outline>
        Sign In
      </Button>
          
          
        </Link>
        
        <NavbarToggle/>
      </div> 
      
      <NavbarCollapse>
        <Navbar.Link active={path === "/"} as={'div'}>
          <Link to='/'>
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={'div'}>
          <Link to="/about">
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/project"} as={'div'}>
          <Link to="/project">
            Project
          </Link>
        </Navbar.Link>
      </NavbarCollapse>
      
    

    </Navbar>
  );
}
