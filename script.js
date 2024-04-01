 //*******************************Object*****************//

        // sigleton   // literals ke tarf decleare karte hai to nanhi banata hai 
       // construction se banta hai // sigleton

       // oject .create// ye construction hai 
       // oject literals
       const MySym = Symbol("key1")
       const Jsuser ={
        name : "vikash",
        "full name": "vikash saw",
        [MySym]: "Mykey1",  // [] symbol ka sytnax aisa he hota hai
        age: 18,
        location: "koderma",
        email: "viash@123gmail.com",
        isLoggedin: false,
        LastLoginDays : ["monday", "sunday"]
        

       }
       console.log(Jsuser.email);           
       console.log(Jsuser["email"]);   
       console.log(Jsuser["full name"]);
       console.log(Jsuser[MySym]);
// changr karna value ko//
     Jsuser.email= "kumar3989@123gmail.com",
     console.log(Jsuser.email);
     // agar locked rakhna hai value ko to ye kare //
     //Object.freeze(Jsuser)
     Jsuser.email = "kumar3989@13micftgmail.com"
     console.log(Jsuser);
        Jsuser.greeting = function(){
            console.log("hello js user");

            Jsuser.greetingTwo = function(){
                console.log('hello js user ,&{this.name}')
                  // agar variable add karna hai to & laga kar add kR SAKATE HAI //
            }
        }
           console.log(Jsuser.greeting());
           console.log(Jsuser.greetingTwo());
               //***********8object....*******8//
       
           //const tinderUser = new Object()  //sigleton oject hai 
           const tinderUser = {} // empty object /// ye non singleton object hai 
         tinderUser.id="123abc"
         tinderUser. name = "vikash"
         tinderUser.isLoggedIn= false
         
          // console.log(tinderUser)   
          const regularUser = {
            email:  "kumar@123gmail.com",
            fullname: {
              userfullname:{
                firstname: "vikash",
                lastname: "kumar",
              }
            }
          }
         // console.log(regularUser.fullname.userfullname.firstname);
         const obj1 = {1: "a", 2: "b"}
         const obj2 = {3: "a", 4: "b"}
         const obj4 = {5: "a", 6: "b"}
       //  const obj3 = {obj1 , obj2}
          //const obj3 = Object.assign( obj1 ,obj2)//
          const obj3   ={...obj1,...obj2}

       //  console.log({obj3);

       // data user ka use in array 
       const user = [
        { 
          id: 1,
          email: "kumar237838@gmail.com"

          },
          {
            id: 1,
          email: "kumar237838@gmail.com"

          },
        {
          id: 1,
          email: "kumar237838@gmail.com"

        },
        
       ]
       user[1].email
        
        console.log(tinderUser);
        console.log(Object.keys(tinderUser));  // object key define karta hai uska data types ka hai 
        console.log(Object.values(tinderUser));
   // array mai sab value bana dete hai 
      console.log(Object.entries(tinderUser));
    // puch sakte hai tindderuser ke pass ki ye value hai ye kki nahi 
    console.log(tinderUser.hasOwnProperty ('isLoggedIn')); // check karna hai ki property hai ki nahi
    const course ={
      coursename: "hindi .js",
      price: "300",
      cousrInstruction: "vikash"

    }
    const{cousrInstruction: Instruction}= course
    //console.log(course);   // destracking ka use hot ahai({}) case hai 
    console.log(Instruction); 
   // {
      //api call 
     // "name":"vikash"  
     // "price":"300"   // jspon ka site hai jaha api ko isiy fomaitize kr dege 
      // or jaruari nahi hai api object ke frm maii ho ye array ka form mai vi ho sakta hai 
     // [
      //  {
          {

          }
       // }
     // ]
   
   // }
      // ********** FUNCTIOON() AND scope//  data ko pacakge mai rakh sakte hai 

      function sayMyname() {
        console.log("h");
        console.log("i");
        console.log("t");
        console.log("e");
        console.log("s");
        
      }
     //sayMyname() // ye reffrance hai ()ye hai excutaion 
     function addTwoNumbers(number1,number2){
    //  console.log(number1+number2);  // cnumber1,number2 parameteer
                                    //null ye hai arggument 
     }
           function addTwoNumbers(number1,number2){
        let result = number1+number2 
        return number1+number2
        }
        //console.log("vikash");
       // return result  
        //console.log("vikash"); //not prinit
        

        // return karke variable mai store mai kar sakte hai,

     //addTwoNumbers(3,5)   //"4" rahega to string samjegA  OR VALue 3 4 ayaga 
     const result = addTwoNumbers(3 ,5)
    // console.log("Result",result);
    function LoginUsermessasge(username ){
      if( username === undefined){
     //   console.log("plesse enater a username");  // check karna hai kuch vale hai ya nahi 
        return
      }
      return  '${username} just logged in'
    }
  
      // ye excecute hawa hai but valu ko return kar do print karne nhi bole hai 

  console.log(LoginUsermessasge("vikash"))
  console.log(LoginUsermessasge("vikash"));    // agr valu define nhi hota hai undefine ata hai
   //made in shopingcard..//*******

   function calculatecartprice(val1 ,val2, ...num1){
    return num1
   }
   console.log(calculatecartprice(200,400,600,500,600));
   //reset ka matlab khudra bikarta hai ye ....//
  // object or array kaise pass hote hsi function mai //
   const u= {
    username:"vikash",
    price: 199     //if prices agar dete to undefined ho jata hai
   }
   function handleObject(anyobject){
   // console.log('Username is ${anyobject.Username} and price is$ {anyobject}' );
  
   console.log(` username is ${anyobject.username} and price is ${anyobject.price}`);

   }
  // handleObject(user)
 // hamlog bana ke pass kar sakte haai  price 
 handleObject({
  username:"vikash",
  price: 300
 })
 // array usses in function pass hoto hai datatypes
 const  myNewarray =[200,400,600]
 function returnsecondValue(getarray){
  return getarray[1]
 } 
 console.log(returnsecondValue(myNewarray)); 
             //******SCOPE********//
 // const A = 10
//  let B = 20
  //var C = 300 
     // ye galobal scope hai 
     let  A = 300
  
    if(true){
      const A =10
      let B = 20    //ye block scope hai 
     // var C = 30   
     console.log("INner:", A);    
    }   // jitni vi {} rahega utna mai he code

  
console.log(A);
//console.log(B);
//console.log(C);
if (true){
  const username ="vikash"
  if(username === "youtube"){
    const username= "website"
    console.log(username+website);
    console.log(website);

  }
  console.log(username);
 }
// **********intersiting*****
function addone(num){
return num +1
}
// console.log( addone(5))
const addtwo =  function (num){  // aha VAR mai hold vi kiya hai
return num+2
}
addtwo(5)
// ye ak hosting hai phale declratin
function one(){
  const username="vikash"

  function two(){
    const username = "youtube" // iska scope itna he hai{}
    //console.log(username);   // dekhna hai ki function one wala excute hota hai 

  }
  //console.log(website);// ye scope se bhar hai two ka 
   // two exexute ho jyaga one mai but one nahi hoga 

 // two() 

}
// one()
// ******arrow function this se pjhale object sikhna hoga//
const ur={
username:"vikash",
price:399,// ye hard code nhi the only contexxt hasi 
welcomemessage:function(){
  console.log(`${this.username}, welcome to wesite`);  // ye cuurent context hai 
  // this.refer karta hai cuurrentb conntext ko 
 // console.log(this);

}
}
user.welcomemessage()
//aaha se value change karenge //
user.username="sam"   // context means value or kisk  bare mai  bat ho rahi hai 
user.welcomemessage()
// console.log(this);  // aha window dekh raha hai purna engine hai 
//broswer ke under jo  galobal object hai oo hai window object hai 
// or node js mai empty object hai {}
//function chai(){
//console.log(this);  // ye srif node js mai dikhega 
//}
// chai()
const chai = function(){
let usernamee = "vikash"
console.log(this.username);   // out put undefined aya hai ye node js maI DIKEGGA
}
chai()
//
  //*********interview in js *excucation context ******
     //  {}   first gallobal execution context jo refer karta hai this.AbortController
     // brwoser ka galobal ec alaga or node js wala alag hota hai 
     //galobal execution contex       
     // function ec
     //eval ex c
//{} phase two types 1 . memory ceraction phase 
2. //excution phase 
let val1 = 10    //1st galobal ex loctate this ke under
let val2 = 5      // memory phase   add num ke liye hoga 
                  // val1 undefined
                  // val2 undefined    // ye firs cycle hai
                  // adnum  defination ()
                  // result 1 undefined
                  // result2 undeined
                  // #excution phase  ye vi addnum mmai hoga 
                  // vAL1 = 10
                  // vAL = 5
                  //add num = new var envorminet or ak excuation threds
                  

function addnum(num1,num2){
  let total = num1+num2
  return total
}
let result1 = addnum(val1,val2)
let result2= addnum(10,2)
     //******CONTROL FLOW********//
     //if
    // const isUserLoggedIn = true
     //const temperature = 41 
                // condition check karta hai ki true hai ya false 
     //if (temperature ===40){
      //console.log("less than 50")
     //} else{
     // console.log("temperture is greater than 50");

   //  }
    // console.log("execute");  // ye if statement  se bhar hai 

// < ,>,<=,>=,==,!=, ===,!==
                       // ******scope****
                       //const score=400
                      // if (score> 100){
                       // const power ="fly"   // conts he use karna chaiye 0r var hai compleltly galobal or usse vi nahi karna chiye 
                       // console.log(`user power:${power}`);  // AHA TAK KOI DIIIKAKT NAHI HAI AGR GLOBAL AVRIBLE  Ko bhar kr dete hai to 
                       //}
                      // console.log(`user power:${power}`); 

    // const balance = 1000
     //if (balance>500)   console.log("test"), console.log("test2");   // but is type ak sath code not needs     
     if(balance < 500)  {
      console.log("less than 500");
   } else if (balance < 750)  {
      console.log("less than 750");

   }else if(balance < 900){
       console.log("less than 750");
  } else {
      console.log("less than 1200");


  }

 
  //**** *** real life use in js ?/ condition chehck for shopin  
  const usernameLoggedIn = true     // user ka formate thik formate mai hona chaiye first check kart hai 
  const debitcard = true
  const LoggedInfromgoogle = false 
  const LoggedInfromemail = true


  if(usernameLoggedIn && debitcard  && 2==2 ){       // && mean both are true condition 
    console.log("allow to buy purchase");
  }
  if(LoggedInfromgoogle || LoggedInfromemail){      // || ye multipe condition cheak karta hai anyhow one can be true then condition always true 
    console.log("user logged in");
  }
   // ****** switch case ???????////
    // switch (key) {
     //   case value:
            
     //       break;
     
       // default:
       //     break;          
    // }
    const month = 3      // if value will be present in string " " then you can print in case one "jan", "feb" al lena hai string mai 
    switch(month){
     case 1:
         console.log("january");
         break;
         case 2:
         console.log("feb");
         break;    
         case 3:
         console.log("march");    // one time when case is match then all case exeuted but neither default vale behaind 
         break;  // control flow ko break kar deta hai 
         case 4:
         console.log("april");
         break;

         default:month
         console.log("default case match");   // if any condition doest match anycase then automatically executed
         break;
    }

    //***** truthy value and falsy value ??//
    const userEmail = "vikas@12"
  if(userEmail){
     console.log("got user email");
  } else {
     console.log("dont have user email");
  }
  // falsy value : false, 0 ,-0, bigint on, "" , null, undefined, nan  // "" empty string ko vi falsy value 
  // truthy value : "0", 'false', "", {}, [], function(){}
  if(userEmail.length === 0){            // cheak karna hai data types empty hai kya 
     console.log( "array is empty");
  }
  const emptyObj ={}                   // detect kar sskate eho empty hai ki nahi kuch vi chess ko detect kar sakte ho 
  if (Object.keys(emptyObj).length===0){
     console.log("object is empty");

  }

   false == 0
  true
  false ==''
  true
  0==''
  true
// nullish coalescing opertor (??)
let va1
val1 = 5 ?? 10      // is type ka value first  print hoga  
val1 = null ?? 10 // 
val1 = undefined ?? 15 // 
val1 = null?? 10?? 20   // jo value first mil jyaga wahi assign ho jyaga 


console.log(val1);
///**** terniary opertor //
// conditon ? true: false 
const iceteaprice = 100
iceteaprice<= 80? console.log("less than 80 "):console.log("more than 80");

              //  ******iteration loops**//
    //for
    for (let i = 0; i <= 10; i++) {
      const element = i;
      if(element == 5){
      //console.log("5 is best number");  // loop ke under vi lopp aa sakte hai 
      }

      //console.log(element);   //element bhar exics nahi karna chaayie

      
  }
      // loop ke under loop outer loop ak bar chalega inner loop 10 bar chalega*
      for (let i=1; i <=10 ; i++) {
       //   console.log(`outer loop value: ${i}`);
          for (let j=1; j <=10 ; j++){
              //console.log(`inner loop value ${j} and inner loop ${i}`);
              // multiple single kar sakte hai 
             // console.log(i + '*' + j + '=' + i*j );
          }
          
      }
     let myarray = [ "flash", "batman", "superman"]
     //console.log(myarray.length);
      for (let index = 0; index < myarray.length; index++) {  // <= to laga dge to undefined hoga lentg 0 se start hoga 
          const element = myarray[index];
          console.log(element);
      }
     // break and continue
     for (let index = 1; index <= 20; index++) {
      if(index == 5) {
          console.log(`detected 5`);
        //  break   // ye break kar dega  5 value se 
      }
  console.log(`value of i is ${index}`);
      
     }
     for (let index = 1; index <= 20; index++) {
      if(index == 5) {
          console.log(`detected 5`);
          continue  // ye break kar dega  5 value se 
      }
  console.log(`value of i is ${index}`);
      
     }
     //*while loop do while loop*//
     let index = 0
     while(index <= 10){
        console.log(`value of index  is ${index}`); 
        index = index+2

     }
let marry = ['vikash', "vikash", "raja"]
let arr =0
while( arr < myarray.length)

console.log(`value is array${myarray[arr]}`);
arr = arr+1

let score =1  // score ka  value 11 hoga tab value 11 print hogha 
do{
console.log(`score is ${score}`);
score++


} while (score<=10); 

//for of 
      // [{} {} {}] aaray ke under object hai 
      const ar = [1,2,3,4,5,6,]     //arr hai 
      for (const num of arr) {
        console.log(num);

      }
     // console.log(num);
     const greeting = "hello world"
     for (const greet of greeting) {
        console.log( `each char is ${greet}`);
        
     } 
     // map .,, ye object hai or unic value hai key value ke enter kar sakta hai string // dublicate value doesnt exit
     
      const map = new Map()
      map.set('in', "india")
      map.set('usa', "nited kingdom of america ")  // unique value// map ke under itraction nahi kiya ja sakta 
      map.set('frn', "france")

//console.log(map);  loop laga sakte hai 
//for (const key of map) {
 // console.log(key);  // alag alag print hoga 

  
//}
for(const [key,value] of map){
  console.log(key, ':-', value);
}
const myObject = {
  'game1':  'nfs',
  'game2' : 'spiderman'
}
      for (const [key ,value] of myObject) {
        console.log(key, ':-', value);    // ye iterabale nahi ahi object
}
     
  //***my object ke liye iterable kaise kya hota hai
const myObjt ={   // myobject 
  js: 'javascript',
  cpp: 'c++',
  ib: "ruby",
  swift: "swift by apple "
}

for (const key in myObject) {   // for in lagan hai 

 // console.log(myObject[key]);  //
 console.log(`${key} shortcut is for ${myObject[key]}`);

}

    //for in
const programming =["js", "rb", "py", "java",]
for(const key in programming){
  console.log(programming[key]);
}
// for each loop 
const coding =["js", "ruby","java", "phython", "cpp", ]
coding .forEach(function name(iteam){
 // console.log(iteam);
})
coding.forEach(() => {})     // ararow function 


function printm(iteam){
 // console.log(iteam);
}
coding.forEach(printm)

coding .forEach((iteam, index, arr) => {   // interview purpose 
console.log(iteam  , index , arr);
})

const mycoding=[
{
  languagename : "java",
  languagefilename: "js"
},
{
  languagename : "javascript",
  languagefilename: "js"          // array ke form mai ati ati
},
{
  languagename : "phythan",
  languagefilename: "py"
}
]
mycoding. forEach((iteam)=> {  // foreach find karna hai ye arary ke under agar objwect hsi to 
console.log(iteam.languagename);
})


 /////six js ?/ for each for filter
    
 const coing = ["js", "ruby", "java", "phython", "cpp",]  // coding 
 const values= coding.forEach((iteam) => {
   //console.log(iteam);    // kuch return karna hai to unddefined 
   // for each koi value return nahi karta 
   return iteam
 })
// console.log(values);

const myNums = [1, 2 , 3, 4, 5, 6, 7, ]
const newNums= myNums.filter((num) => num>4)
// console.log(newNums);

   // ye value vapas karta hai return karta hai 
   const books =[

   ]  // agar  data base ka pura formate agar pata karna hai to 

 let userBooks = books.filter((bk) => bk.genre === history)
    // hiostroy kab published hona chaiye 
    userBooks = books.filter((bk) => { 
      return bk.published >= 1958 && bk .genre === "history"
     })  // scope use kiya hai ye nahio hiota // retern use karke scope use kar saktae hai 
 console.log(userBooks);

  // add karna jai variable ke under number ko // map // eight.js

  const myNumber =[1, 2 , 3, 4, 5 , 6 , 7, 8, 8, 9, 10 ]

  // const newNums = myNumber.map((num) => num +10)
 //const newNums = myNumber.map((num) => { return num +10})  // return laga ka use ahi karna hai 

  // console.log(newNums);
// ak sath bhut method laga sakte hai 
const newNs = myNumber // newNums
               .map((num) => num *10)
               .map((num) => num +1)
               .filter((num) => num >= 40)
               //console.log(newNums);


               // nine .js// reduce
     const mynums =[1, 2, 3, ]

    ////const mytotal= mynums.reduce(function(acc ,currval){
     //console.log(` acc: ${acc} and currval: ${ currval}`);
   //  return acc + currval
    //}, 0)      // aha se strat hota hsi 0 , ke bad koi vi value hoti 3

    //console.log(mytotal);
    const mytotal = mynums.reduce((acc, curr) => acc+curr, 0)
    console.log(mytotal);
      const  shoppingcart= [{
       iteamname: "js course",
       price:999

      },
      {
      iteamname: "javascripyt course",
       price:991

      },
      {
       iteamname: "data science  course",
       price:990

      }
     
     ]

     // add karna hai ye value 
 const pricetopay=            shoppingcart .reduce((acc, iteam) =>  acc + iteam.price , 0)

       console.log(pricetopay);



      

    



       

       










     


