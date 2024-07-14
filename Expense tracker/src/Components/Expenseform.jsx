

import {Typography , styled ,  CardContent, Box } from '@mui/material'
const Container = styled(Box)`
    display:flex;
&>div{
    flex:1;
    padding:10px;
}
`
const Expenseform= ({transactions})=>{
    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item > 0).reduce((acc,item) => (acc += item) ,0).toFixed(2);
    const expense = (amount.filter(item => item < 0).reduce((acc,item) => (acc += item) ,0)*-1).toFixed(2);
    return(
        
        <Container>
            <Box>
                <CardContent>
                    <Typography>income</Typography>
                    <Typography style={{color:'green'}}>₹{income}</Typography>
                </CardContent>
                </Box>
                <Box>
                <CardContent>
                    <Typography>Expense</Typography>
                    <Typography style={{color:'red'}}>₹{expense}</Typography>
                </CardContent>
            </Box>
        </Container>
    )
}
export default Expenseform;