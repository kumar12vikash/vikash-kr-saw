//import { Box } from "@mui/material"
//import Transactions from "./Transactions"


import { ListItem, ListItemIcon, ListItemText,styled } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
//import { Delete } from "@mui/icons-material";

const Deatils = styled(ListItem)`
    margin-top:10px;
    

`


const Transaction = ({transaction,setTransactions,transactions})=>{
    const color = transaction.amount > 0 ?'green':'Red';
    const deleteTransaction=(id)=>{
//trns ko delett karne ke liye filtrer comppmet ko use karna chsiye 
setTransactions(transactions.filter(transactions=>transactions.id !==id ));

    }
    return(
        
            <Deatils style={{background:`${color}`, color:'#fff'}}>
                <ListItemIcon>
                    <DeleteIcon onClick={()=>deleteTransaction(transaction.id)}/>
                </ListItemIcon>
                <ListItemText>{transaction.text}</ListItemText>
                <ListItemText >{transaction.amount}</ListItemText>
                </Deatils>
        
    )
}
export default Transaction;