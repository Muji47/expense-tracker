import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'
import { Button, Typography} from '@mui/material';
import { connect } from 'react-redux';

function Upperddetails(props) {
  const {headText,incomeState,expenseState}=props
  const [price,setPrice]=useState(0)
  useEffect(()=>{
  if(window.location.href.includes("income")){
    setPrice(incomeState)
  }else{
    setPrice(expenseState)
  }},[price,setPrice,incomeState,expenseState])
  return (
    <div>
        <div className='flex pt-4 text-white'>
                <Link to='/'>
                <Button><BsArrowLeft className='text-white'/></Button>
                </Link>
                <p className=' flex-grow'>{headText}</p>
            </div>
            <div className='flex flex-col justify-end text-white pl-9'>
                <Typography variant='body1' className='opacity-50'>How much?</Typography>
                <Typography variant='h2' >${price}</Typography>
        </div>
    </div>
  )
}
const stateToProps=data=>({
  incomeState:data.CashDetails.income,
  expenseState:data.CashDetails.expense
})
export default  connect(stateToProps,null)(Upperddetails)