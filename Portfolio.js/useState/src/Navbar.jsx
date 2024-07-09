
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
//import { IconContext } from "react-icons/lib";
import { useState } from "react";
import {Link} from 'react-scroll'


function Navbar() {
  const[menu , setMenu]=useState(false)
  const navItems= [
    {
      id:1,
      text:"home"
    },
    {
      id:2,
      text:"About"
    },
    {
      id:3,
      text:"portfolio"
    },
    {
      id:4,
      text:"Experiance"
    },
    {
      id:5,
      text:"Contactus "
    },
  ]
  return (
   
   <>
   <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
    <div className="flex justify-between items-center h-16">
      <div className="flex space-x-2">
      <img src="https://media.istockphoto.com/id/578811140/photo/smiling-female-young-college-student-of-indian-ethnicity.webp?s=1024x1024&w=is&k=20&c=LK-ELY7tZHFXOeXGgRzbAmTsOwM_dPw5tq5QIXxxaLc=" className="h-12 w-12 rounded-full" alt="" />
      <h1 className="font-semibold text-xl cursor-pointer">vikas<span className="text-green-500 text-2xl">h</span>
      <p className="text-sm">web Devloper</p>
      </h1>
      </div>
      <div>
        {/* desktop var */}
        <ul className="hidden md:flex space-x-8">
         
         {
          navItems.map(({id, text})=>(
            <li  className ="hover:scale-105  duration-200 cursor-default" key={id}>
            <Link to={text} 
             smooth={true}
             duration={500}  
             offset={-70}
             activeClass = "active"    >
             {text} </Link>
              </li>  // li ke under mai ak key ko dete hai taki unique rahe koi dikkat na ho           
                                                                  
          )) }
        </ul>
        <div onClick={()=>setMenu (!menu)} className="md:hidden"> {/*if menu ka value true hai to menue dikha do nhi to icoloe dikha do md or usee bade device ke liye hoidedeen kar de    */}
          {menu ? (<TiThMenu size={24}/>
          ):(
          <IoClose size={24}/>)}
          </div>

      </div>
    </div>
    {
      menu &&(
        <div className="bg-white">
      {/* mobile navbar */}
      <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-4 ">    
      {
          navItems.map(({id, text})=>(
            <li  className ="hover:scale-105  duration-200 cursor-default"key={id}>
              
              <Link to={text}
              onClick={()=>setMenu (!menu)} 
             smooth={true}
             duration={500}  
             offset={-70}
             activeClass = "active"    >
             {text} </Link>
              </li> // li ke under mai ak key ko dete hai taki unique rahe koi dikkat na ho           
                                                                  
          )) }
      </ul> 
    </div>
      )}

    
   </div>
   </>
  )
}

export default Navbar
