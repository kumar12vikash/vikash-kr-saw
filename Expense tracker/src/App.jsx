
import './App.css';
import {Box, Typography, styled } from '@mui/material'
///components
import {  useState } from 'react';
import Balence from './Components/Balence';
import Expenseform from './Components/Expenseform';
//import { Container } from 'postcss';
import Newtransaction from './Components/Newtranscation';
import Transactions from './Components/Transactions';
const Header = styled(Typography)`
margin :10px 0;
font-size: 36px; 
text-align: center;
text-transfrom: uppercase;
color: blue;
margin-left: 10px;



`
const Raju= styled(Box)`

display:flex;
margin-left: 20px;
width:800px;
padding:10px;
border-radius:20px;
margin:auto;
&>div{
height:70vh;
width:50%;
padding: 10px;
}

`
// four comp ke data ko mai aha pe 4 comp ke data ko ak comp net se dusre mai store kar sakta hai 

function App() {
  const [transactions,setTransactions] = useState([
    { id:1 , text: "moms", amount: -20}, 
    {  id:2 , text: "Salary", amount: 4000},
    { id:3 , text: "Book", amount: -2000},    
    {id:4 , text: "Bonus", amount: 1500 },
  ]) // ye default value hai trnsaction ka 
 
 // setTransactions ;
  
  return (
    
    <Box className='App'>
      <Header>EXPENSE TRACKER</Header>     
    
    <Raju>
    <Box >
      <Balence transactions = {transactions}/>
      <Expenseform transactions={transactions}/>
      <Newtransaction setTransactions={setTransactions}/>

    </Box>
    <Box>
      <Transactions transactions ={transactions} setTransactions={setTransactions}/>
    </Box>
    </Raju>
    </Box>


      
  )
}

export default App
