
import { FaInstagram, } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { SiTelegram } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";





function Home() {
  return (
    <>
    <div name="home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 ">
     <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2  mt-12 md:mt-24 space-y-2 order-2 md:order-1">
        <span>welcome in my feed</span>
        <div className="flex space-x-1 text-2xl md:text-4xl">
        <h1>hello, i`m    a </h1>
       {/* <span   <ReactTyped strings={["Here you can find anything"]} typeSpeed={40} />>Devloper</span>*/}
       <ReactTyped className="text-red-700 font-bold"   strings={["Devloper","Programered","Coder"]} typeSpeed={40} backSpeed={50} loop={true} />

        <br/>
        </div>
        
            
        <p className="text-sm md:text-md text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quis exercitationem blanditiis error rerum minus recusandae tenetur nulla, hic commodi ipsa ex quae voluptates eos fugit dolorum architecto itaque repellendus quia earum! Suscipit harum, culpa veniam soluta sit quibusdam nobis obcaecati excepturi! Nobis similique magnam minus cumque. Quaerat, vero aspernatur!</p>
        <br/>
        <div className="flex items-center flex-col md:flex-row justify-between space-y-2 md:space-y-0">
        {/*social media icons */} 
        <div  className="space-y-2 cl ">
          <h1 className="font-bold text-center">Avilable on</h1>
          <ul className="flex space-x-5">
            <li>
              <a href="https://www.instagram.com/" target="black">
            <FaInstagram className="text-2xl cursor-pointer"/>
            </a>
            </li>
          <li>
          <a href="https://www.facebook.com/" target="black">
          <FaFacebookSquare className="text-2xl cursor-pointer"/>
          </a>
          </li>
          <li>
          <a href="https://www.youtube.com/" target="black">
          <IoLogoYoutube className="text-2xl cursor-pointer"/>
          </a>
          </li>
         <li>
         <a href="https://www.telegram.com/" target="black">
         <SiTelegram className="text-2xl cursor-pointer"/>
         </a>
         </li>
          </ul>
          
        </div>
        <div className=" space-y-2">
          <h1 className="font-bold">Currently working on</h1>
          <ul className="flex space-x-5">
            <li>
              {" "}
              <DiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>

            </li>
            <li>
                {" "}
                <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
            </li>
            <li>
              {" "}
              <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>

            </li>
            <li>
              {" "}
              <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div className="md:w-1/2 md: ml-48 mt-14 order-1 text-center">
      
      <img src="https://media.istockphoto.com/id/664874606/photo/hacker-in-the-dark-breaks-the-access-to-steal-information.jpg?s=1024x1024&w=is&k=20&c=x-JvAPjN4Yfb3K0mYTIRiW1_blgEd1t1sqEPFEfDAak=" className="rounded-full md: w-[400px] h-[400px]" alt="hacker"/>
      
      </div>
      </div>
      
      <hr/>
    </div>
    </>
  )
}

export default Home
