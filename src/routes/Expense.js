import React from 'react'
import Descriptionofitems from '../components/Descriptionofitems';
import Upperddetails from '../components/Upperddetails';



export default function Expense() {
  return (
    <div className='bg-[#fd3c4a] h-screen'>
        <Upperddetails headText={'Expense'}/>
        <Descriptionofitems/>
    </div>
  )
}
