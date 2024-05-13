// ak file mai ak he comonets rakhte hai 
  
//import ExpenseItem from "./components/ExtenseItem";
import Student from "./components/Student";
import React, {useState} from 'react';


//function App() {
    //return <h3> First component</h3> ;   // jsxx ka file direct mai likh sakte hai html js mai <h3>avi reten kiye teh ab aha <p>or ak he2 vi pass karna hai
   // return<div><h3> First component</h3><p>this is a p tag</p> </div> ;// ab ak se jaya reper dal sakte ho div mai 
 // return ak he chij pass kaerta hai  tag ko jsxx file mai vi index.js ka file index.html tak chale gye 

//return(
   // <div className="app-container">
      //  <h3>First comonets</h3>
      //  <p>this is a p tag</p>    
   // </div>
   //big latter ko lilkhn Jaruri hota hai kon sa tag kao hai react ya html ka small sehoga com ko big se 
  // <div>
   // <h2>i am vikaksh </h2>
//<Subcomonents> </Subcomonents> // add ho gya jo pass kiye the waha single tag vi banega or duble vi 
 //</div>
//<SubComponets></SubComponets>
//);  // ye ab block code mai hai   // iske liye alag se css likhna hai 

              // interview question
              //class constructor ke under mai use kar sakte hai useState nahi answer hai 


function App(){
// properties add kare array ki // array of object banana hai 
const [name,setName]=useState("Anil") // isko pahle se set kiye hai 
 // kya ham ye function ko vi as oo propes kar sakte hai 
 function apple(){
   alert("hello")
 }

    return(
       <div>
       
           <div className ="APP">
            <h1>props in React :</h1>
         
           </div>
        <Student name={name}/>
        <button className="container"  onClick ={()=>{setName("sidhu")}}> update  name </button>
        
        
          
        
        
        
   </div>     
    );
    
}

//}  in thino se access karenge apne var mai ahi se acess milega

export default App;  
 // default isliye bheja gay taki iska name change kar sake import mai
//is tara karke bhut chij pass kR SAKTE HAI har ak  email phone numer {'number}
// props change karna hai ab 
// ye components hai students ka  isko d4elet add sab kar sakte hai 
// <Student name={'anil'}  email ="anil12gmail.com" other={{address:'chennai', mobile:"111"}}/> 
//<Student name={'rahul'}  email ="rahul12gmail.com" other={{address:'noida', mobile:"222"}}/> 
//<button id ="button" onClick ={()=>{}}> update  name </button>  
         
