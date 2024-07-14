  
  import { Box, Typography,Divider, List, styled } from "@mui/material";
  const Tform = styled(Box)`
font-size: 25px;
margin-button: 20px;
text-align: center;
`
  import Transaction from "./Transaction";

  const Transactions =( {transactions , setTransactions} )=>{
    return(
        <Tform>
            <Typography variant="h5">Trnasaction History</Typography>
            <Divider/>
            <List>
               
            
            {
              transactions.map(transaction => ( 
              
              <Transaction transaction = {transaction} setTransactions={setTransactions} transactions={transactions}></Transaction>
              
            ))
            }
            
             
               
               
               
               
            </List>
        </Tform>
    )
}

  export default Transactions;