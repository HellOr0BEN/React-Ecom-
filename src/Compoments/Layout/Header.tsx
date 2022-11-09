import React from 'react'
import { Stack, Typography, Button, AppBar, Toolbar, Container, Link, Menu, MenuItem } from '@mui/material'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Header = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Stack
              direction={"row"}
              alignItems="center"
              justifyContent={"space-between"}
              width="100% "
            >
              <Typography>Discount Offer</Typography>
              <Button variant="text" color="inherit">
                <PersonPinIcon />
                Login/Register
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Stack
              direction={"row"}
              alignItems="center"
              justifyContent={"space-between"}
              width="100% "
            >
              <Typography variant="h4">LoGo</Typography>
              <Stack direction={"row"} gap={5}>
                <NavLinks/>
              </Stack>
              <PersonPinIcon />
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header


const NavLinks = () => {
  return (
    <>
      <Link underline='hover' sx={{color:'white'}}>
        <Typography  sx={{ color: "white",fontWeight:'bold' }}>
          <Stack direction={'row'} alignItems='center' sx={{ cursor: 'pointer' }}>
            Audio
            <KeyboardArrowDownIcon />
          </Stack>
        </Typography>
      </Link>
      <Link underline='hover' sx={{color:'white'}}>
        <Typography sx={{ color: "white",fontWeight:'bold' }}>
          <Stack direction={'row'} alignItems='center' sx={{ cursor: 'pointer' }}>
            Energy
            <KeyboardArrowDownIcon />
          </Stack>
        </Typography>
      </Link>
      <Link underline='hover' sx={{color:'white'}}>
        <Typography sx={{ color: "white",fontWeight:'bold' }}>
          <Stack direction={'row'} alignItems='center' sx={{ cursor: 'pointer' }}>
            Protection
            <KeyboardArrowDownIcon />
          </Stack>
        </Typography>
      </Link>
      <Link underline='hover' sx={{color:'white'}}>
        <Typography sx={{ color: "white",fontWeight:'bold' }}>
          <Stack direction={'row'} alignItems='center' sx={{ cursor: 'pointer' }}>
            Life
            <KeyboardArrowDownIcon />
          </Stack>
        </Typography>
      </Link>
      <Link underline='hover' sx={{color:'white'}}>
        <Typography sx={{ color: "white",fontWeight:'bold' }}>
          <Stack direction={'row'} alignItems='center' sx={{ cursor: 'pointer' }}>
            Sale
            <KeyboardArrowDownIcon />
          </Stack>
        </Typography>
      </Link>
     
    </>
  )
}