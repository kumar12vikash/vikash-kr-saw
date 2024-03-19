const accountID= 144312                 //varible cont use in javascript.//
let accountEMAIL= "vikash@gmail.com"
var accountpasswaord= "12345"
accountCity ="telaiya"
let accountstate;


//accountID =2// not allowed
//change kiye  phale wala modifyinging code //

accountEMAIL="krin@gmail.com"
accountpasswaord= "2121"
accountCity ="koderma"
                            
      //refer not to use to var beacause of issue in block scope and funtional scope//              



console.log(accountID);
console.table({accountID,accountEMAIL,accountpasswaord,accountCity,accountstate})

       // &2. DATATYPES//
"use strict";  //treat all js code as newer version

        // alert (3+3) // we are using node js not browers 

       console.log(3+3); 
       //code relabilty high
console .log("vikash")

let name = "vikash "
let age = 18
let isLoggedin= false
let state = null

// number => 2 to power 53
// bigint 
//string=> ""
// boolean=> true/false     // primitive data types 
// null=> standalone value                  //objet hai null ak 
//undefinend=>//             // ye undefine he hai 
// symbol => uniue 

// object
console.log(typeof undefined);  // undefined he hai
console.log(typeof null);  //object ye hai 

              //CONVERSION OPERATION IN JS//

              
       
       
              let score= true
       
             // console.log( typeof score);              // let score ke badd agar conversion karna hai to 
       
              let valueINnumber= Number(score)             //notes// 
                                                           //"33"=>33
                                                           //"33abc" =>nan
                                                           //true=> 1//false=>0
                                                           //null=> 0
                                                           //undefined=>nan
       
              //console.log( typeof valueINnumber);
              //console.log(valueINnumber);
       
              let isLoggedIn = "vikash"
              let booleanisLoggedIn = Boolean(isLoggedIn)  //1=> true;
                                                           //""=> false
                                                           //"vikash"=> true
              console.log( booleanisLoggedIn);
       
              // string covert//
              // number ko string mai convert karte hai //
              let someNumber =33
              let stringNumber = String(someNumber)
              console.log(stringNumber);
              console.log(typeof stringNumber);

              //comparision js//

        //console.log("2"> 1);
       // console.log(1 >"2");
        console.log(null >0);
        console.log(null ==0);
        console.log(null >=0);

        console.log(undefined==0);  // false he ayga undefined mai

        //===
        console.log( "2" ===2); //data type alag hote hai ===

         //DATATYPES SUMMARY.JS//
        
        // primitive 

        //7 types : string ; number; boolean ,null,undefined,symbol,bigint
        
       
        const scorevalue = 100.3
       // const  isloggedin= false
       

        const outsidetemp = null
        let useremail;
        const id =Symbol('123')
        const anotherid = Symbol('123')
        console.log(id===anotherid);
        const bigNumber = 23456677889900007363733282n

        //referenceI()non_primitive

        //array ,object ,function,

        const heros = ["vikash","krishna", "niranjam",]// array
        
            let myobj= {
            name: "vikash",
            age: 22,
            
            
        }
        const myfunction =function(){
            console.log("hello world");
        }
        console.log(typeof outsidetemp);// anotherid
       // ***********************************************************//
                   // STRINGS .JS//
      const nam = "vikash"
      const repoCOUNT = 50
     // console.log(name + repoCOUNT + " value");
     console.log('Hello my name is ${name} and  my repo count is ${repoCount}');


     

     const gameName = new String('hiteshhc')
    console.log(gameName[0]);
      console.log(gameName.__proto__);
      console.log(gameName.length);
      console.log(gameName.toUpperCase());
      console.log(gameName.charAt('2'));
      console.log(gameName.indexOf('k'));

      let str ="hello, world!";
      console.log(str.indexOf("world"));
      console.log(str.replace("world","universe"));

      const newString  = gameName.substring(0, 4)
      console.log(newString);
      const anotherString = gameName.slice(-8, 4)
      console.log(anotherString);

    const newStringOne = "   hitesh      "
    console.log(newStringOne);
    console.log(newStringOne. trim()); // trim remove kar deta hai space ko /

    const url = "http://hitesh.com/hitesh%20choudhary"    // space rahega to covert kar dega %20 mai 

        console.log(url.replace('%20', '-'));  // add kar sakte url mai ..

        console.log(url.includes("hitesh"));  // chek kar sakte hai url mai hai ya nahi 
        console.log(url.includes("vikash")); // ye nahi hai url mai 

         // number and math. js//
         const sc = 400 
         console.log(score);
         const balance = new Number(100)
         console.log(balance);

         console.log(balance. toString().length);
         console.log(balance.toFixed(2));
         const otherNumber =123.8966
         console.log(otherNumber.toPrecision(4));
         const hundreds = 1000000
         console.log(hundreds.toLocaleString('en-IN'));


         //************************math*******//
         console.log(Math);
         console.log(Math.abs(-4));
         console.log(Math.round(4.6));
         console.log(Math.ceil(4.3));
         console.log(Math.floor(4.9));
         console.log(Math.min(4,5,6,7));
         console.log(Math.max(5,8,9,7));

         console.log(Math.random());  // 0 se 1 tak ka value deta hai 
         console.log(Math.random()*10 +1);  // kavi zero nahi ayga *10 se multiple karne par

         console.log(Math.floor(Math.random()*10)+1);
         const min= 10
         const max = 20

         console.log(Math.floor(Math.random()*(max-min+1)) + min);

           //********DATES****//

        let MyDate = new Date()
        console.log(MyDate .toDateString());
        console.log(MyDate.toLocaleDateString());
        console.log(typeof MyDate);

        let MyCreatedate = new Date ("2023-01-14")   // 0 start yet 1 se date mai 
       // console.log(MyCreatedate.toDateString());

        console.log(MyCreatedate.toLocaleDateString());

        let MyTimestamp = Date. now()
        console.log(MyTimestamp);

        let newDate = new Date()            // date paat karna hai to code hai ye 
        console.log(newDate);
        console.log(newDate.getMonth);

                // ARRAY/
                const MyArr = [0, 1, 2, 3, 4, 5]
                const MyHeros = ["viaksh","akshss"]
                const MyArr2= new Array(1 ,2 , 3 ,4)
                console.log(MyArr[1]);
    
                // array methods

                MyArr.push(6)     // ya add hota hai array ami value 
            MyArr.pop(6)  // ye remove karta hai array mai last value ka
            console.log(MyArr);
    
            MyArr.unshift(0)  // ye add kar deta hai new array mai
            MyArr.shift(0)   // ye remove kardeta hai unshift array jo add huwa tha 
          
    
            console.log(MyArr.includes(9));
            console.log(MyArr.indexOf(3));
            const newArr =MyArr .join()
            console.log(MyArr);             // join ak string hai 
            console.log(newArr);
    
           // slice splice//
           console.log("A",MyArr);
    
           const Myn1 = MyArr.slice(1, 3)
    
           console.log(Myn1);
           console.log("B",MyArr);
    const Myn2 = MyArr.splice(1, 3)    // splice 1,3 remove karke jo bachega oo execute kar dega 
           console.log(Myn2);
           console.log("C",MyArr);
     

        
       
       
           


