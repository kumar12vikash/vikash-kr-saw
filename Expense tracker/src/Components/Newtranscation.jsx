import { useState } from "react"
import { Box , Typography, TextField,Button,styled} from "@mui/material"
const ExpensenEW = styled(Box)`
margin :10px 0;
font-size: 36px;
text-align: center;
text-transfrom: uppercase;
color: blue;
display:flex;
flex-direction: column;
&>h5 ,&> div , &> button{
    margin-top: 30px;
}



`

const Newtransaction = ({setTransactions})=>{
    const [text,setText]= useState('');
    const [amount , setAmount]=useState();
    const addTransaction = ()=>{
        const transaction={
            id:(Math.floor() * 10000000),
            text:text,
            amount:+amount  //+ laga ke integer mai change ho jayga 
        }
        setTransactions(prevstate=>[transaction,...prevstate])
    }
    return(
        <ExpensenEW>
            <Typography variant="h5">New transaction</Typography>
            <TextField label="Enter-expense" onChange={(e)=> setText(e.target.value)}/>
            <TextField label="Enter Amount" onChange={(e)=>setAmount(e.target.value)}/>
            <Button variant="contained" onClick={()=>addTransaction()}>Add transaction</Button>
        </ExpensenEW>
    )
}
export default Newtransaction;