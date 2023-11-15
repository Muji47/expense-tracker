import React from 'react'
import profilePic from '../assets/IMG_4525.jpg'
import { Avatar, Typography,Button} from '@mui/material'
import {GiPayMoney,GiTakeMyMoney} from 'react-icons/gi'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux'

 function Homehead(props) {
  return (
    <div>
        <div className=''>
        <Avatar src={profilePic} alt='userPic' className='m-2'/>
        <p className='text-center opacity-60 text-sm'>Account Balance</p>
        <Typography variant="h4" gutterBottom sx={{textAlign:"center"}}>
        ${props.totalMoneyState}
        </Typography>
        <div className='grid grid-cols-2 gap-4 px-4'>
            <Link to='income' >
        <Button variant="contained" startIcon={<GiTakeMyMoney/>} className='text-white text-sm flex flex-col rounded-lg w-full' color='success'>
            <Typography className='opacity-60' variant="subtitle1" >Income</Typography>
            <Typography>${props.incomeState}</Typography>
        </Button>
        </Link>
        <Link to='expense'>
        <Button variant="contained" startIcon={< GiPayMoney/>} className='text-white text-sm flex flex-col w-full' color='error'>
            <Typography className='opacity-60' variant="subtitle1" >Expense</Typography>
            <Typography>${props.expenseState}</Typography>
        </Button>
        </Link>
        </div>
    </div>
    </div>
  )
}
const stateToProps=state=>({
  totalMoneyState:state.CashDetails.totalPrice,
  expenseState:state.CashDetails.expense,
  incomeState:state.CashDetails.income
})
export default connect(stateToProps,null)(Homehead)