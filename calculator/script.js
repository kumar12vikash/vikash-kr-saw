let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{

    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML== '='){
            string = eval(string)
            document.querySelector('input').value = string;
        }
       else if(e.target.innerHTML== 'C'){
            string = ""
            document.querySelector('input').value = string;  // isme c click hoga to cler ho jayga 
        }
        else{
        // else laga ye value print nhai  hoga
        console.log(e.target);  // jo click karoge sara click ho jayga conlog e.log mai 
        string = string+e.target.innerHTML; // add karna hai 
        document.querySelector('input').value = string; // jo vi click hoga oo displY MAI addd hoga 
        }

    })

})