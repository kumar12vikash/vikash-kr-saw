//import React from 'react'

function Portfolio() {
 
 {/* const Carditem=[
    {
        id:1,
        logo: MongoDB,
        name : "MongoDB"
    },
    {
      id:2,
      logo: nodejs,
      name : "nodejs"
  },
  {
    id:3,
    logo: expressjs,
    name : "express js"
},
{
  id:4,
  logo: reactjs,
  name : "MongoDB"
},
{
  id:5,
  logo: sql,
  name : "sql"
}
  ]
*/ }
  return (
  
    <div name="portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-semibold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Project Feature</span>  
    </div>
  
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3  my-5">
        <div>
          <div className="md:w-[300px] md:h-[300px] p-1 cursor-pointer hover:scale-90 duration-200 border-[2px]">
            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" alt="html"/>
            <h1 className="font-semibold mb-2 ml-3 mt-1 ">Html</h1>
            <p className="px-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dicta?</p>
            
            <div className="px-6 py-4 space-x-3 justify-around">
              <button className="bg-blue-500 bg-blue-700 px-4 py-2 rounded text-white font-bold">video</button>
              <button className="bg-green-500 bg-green-700 px-4 py-2 rounded text-white font-bold">Source code</button>
            </div>
            
            </div>
          </div>
        
         
         <div className="md:w-[300px] md:h-[300px]  p-1 cursor-pointer hover:scale-90 duration-200 border-[2px]">
            <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg"className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" alt="html"/>
            <h1 className="font-semibold mb-2 ml-3 mt-1">React.js</h1>
            <p className="px-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dicta?</p>
            <div className="px-6 py-4 space-x-3 justify-around">
              <button className="bg-blue-500 bg-blue-700 px-4 py-2 rounded text-white font-bold">video</button>
              <button className="bg-green-500 bg-green-700 px-4 py-2 rounded text-white font-bold">Source code</button>
            </div>
            
          </div>
          
          <div className="md:w-[300px] md:h-[300px] p-1 cursor-pointer hover:scale-90 duration-200 border-[2px]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsfKOXzC1yDp3a9n40HqBBRVPOFgDA3ZWXQskkF1e91ph0_RiXfyK4QMAuWAgVRGXJG8&usqp=CAU"className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" alt="html"/>
            <h1 className="font-semibold mb-2 ml-3 mt-1">Node js</h1>
            <p className="px-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dicta?</p>
           
            <div className="px-6 py-4 space-x-3 justify-around">
              <button className="bg-blue-500 bg-blue-700 px-4 py-2 rounded text-white font-bold">video</button>
              <button className="bg-green-500 bg-green-700 px-4 py-2 rounded text-white font-bold">Source code</button>
            </div>
            
            
          </div>
          
          <div className="md:w-[300px] md:h-[300px] p-1 cursor-pointer hover:scale-90 duration-200 border-[2px]">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9BVeiXAMU-SsGkVehbpBV1pOlUClyxhC2bg&s"className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" alt="html"/>
            <h1 className="font-semibold mb-2 ml-3 mt-1">Mongo DB</h1>
            <p className="px-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, dicta?</p>

            <div className="px-6 py-4 space-x-3 justify-around">
              <button className="bg-blue-500 bg-blue-700 px-4 py-2 rounded text-white font-bold">video</button>
              <button className="bg-green-500 bg-green-700 px-4 py-2 rounded text-white font-bold">Source code</button>
            </div>
            
            
          </div>
          </div>
          </div>
         
         
        
         

    

  )
}

export default Portfolio
