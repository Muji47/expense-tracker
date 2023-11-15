import React from 'react'
import { Button,ButtonGroup } from '@mui/material'


export default function Homeoverview({setSelectedInterval}) {
    
    const removeHover={
        color:'#fcb836',
        backgroundColor:"#fceed4",
        borderRadius:'2rem',
        width:'5rem',
        "&:hover":{
            backgroundColor: 'transparent'
        }
    }
  return (
    <div>
    
        <div className='flex justify-center'>
        <ButtonGroup variant="text" aria-label="text button group" className='p-6'>
                <Button sx={removeHover} onClick={()=>setSelectedInterval('all')}>All</Button>
                <Button sx={removeHover} onClick={()=>setSelectedInterval('today')}>Today</Button>
                <Button sx={removeHover} onClick={()=>setSelectedInterval('weekly')}>Week</Button>
                <Button sx={removeHover} onClick={()=>setSelectedInterval('monthly')}>Month</Button>
                <Button sx={removeHover} onClick={()=>setSelectedInterval('yearly')}>Year</Button>
        </ButtonGroup>
            </div>
    </div>
  )
}
