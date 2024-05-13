import './Student.css';

//import React, {useState} from 'react'


function Student(props){
  //  console.log(props.name);
  

    return(
        <div className="container">
            <h1>hello  {props.name} </h1>



            
           
           
        
          
        </div>
    );
                // app.js mai bhut component bana dete hai <student/>is tara karke or use kar sakte hai 
}
export default Student;
  // data pass karna hai student comonents mai 
  // bhut data pass kar saktre hai app.js mai 
  //isi tara props pass kate hsi App.js se student .js tak 
 // <h2>email: {props.email}</h2>
  //          <h3>Adress: {props.other.address}</h3>
