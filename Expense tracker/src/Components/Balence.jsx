

import {Typography , styled } from '@mui/material'
const BalenceText = styled(Typography)`
font-size: 25px;
margin-button: 20px;
text-align: center;
`


const Balence =({transactions})=>{
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((amount, item) => (amount += item) ,0).toFixed(2)
    return(
        <div>
    <BalenceText>Balance: ₹{total}</BalenceText>
        </div>
    )
}
export default Balence;