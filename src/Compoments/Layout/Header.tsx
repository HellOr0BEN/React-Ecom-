import React from 'react'
import {Stack,Typography,Button,AppBar,Toolbar} from '@mui/material'

const Header = () => {
  return (
    
    <AppBar position='static' >
        <Toolbar>
        <Stack direction={'row'} alignItems='center' justifyContent={'space-evenly'} >
        <Typography>Discount Offer</Typography>
        <Button variant='text' color='inherit'>Login/Register</Button>
    </Stack>
        </Toolbar>
    </AppBar>
    
    
  )
}

export default Header