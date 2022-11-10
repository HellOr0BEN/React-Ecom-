import React from 'react'
import { Stack, Typography, Button, AppBar, Toolbar, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import PersonPinIcon from '@mui/icons-material/PersonPin';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";


const CustLink = styled(Link)`
  display: bold;
  color: white !important;
  text-decoration: none;
  font-size: 1rem;
  border-bottom: 2px solid rgba(0,0,0,0);

  &:hover {
    border-bottom: 2px solid white;
  }

`;

const Header = () => {
  return (
    <>
      <AppBar position="static"  sx={{ backgroundColor: "black" }}>
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
      <AppBar position='sticky'  sx={{ backgroundColor: "black" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Stack
              direction={"row"}
              alignItems="center"
              justifyContent={"space-between"}
              width="100% "
            >
              <Typography variant="h4">LoGo</Typography>
              <Stack direction={"row"} gap={8}>
                <NavLinks />
              </Stack>
              <Stack direction={'row'} gap={2}>

                <ShoppingCartIcon />
                <FavoriteBorderIcon />
                <SearchIcon />
              </Stack>
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
      <CustLink to="/audio">
        <Typography sx={{ color: "white", fontWeight: 'bold' }}>
          <Stack direction={'row'} alignItems='center' sx={{ cursor: 'pointer' }}>
            Audio
            
          </Stack>
        </Typography>
      </CustLink>
      <CustLink to="/">
        <Typography sx={{ color: "white", fontWeight: 'bold' }}>
          <Stack direction={'row'} alignItems='center' sx={{ cursor: 'pointer' }}>
            Energy
            
          </Stack>
        </Typography>
      </CustLink>
      <CustLink to="/">
        <Typography sx={{ color: "white", fontWeight: 'bold' }}>
          <Stack direction={'row'} alignItems='center' sx={{ cursor: 'pointer' }}>
            Protection
            
          </Stack>
        </Typography>
      </CustLink>
      <CustLink to="/">
        <Typography sx={{ color: "white", fontWeight: 'bold' }}>
          <Stack direction={'row'} alignItems='center' sx={{ cursor: 'pointer' }}>
            Life
            
          </Stack>
        </Typography>
      </CustLink>
      <CustLink to="/">
        <Typography sx={{ color: "white", fontWeight: 'bold' }}>
          <Stack direction={'row'} alignItems='center' sx={{ cursor: 'pointer' }}>
            Sale
            
          </Stack>
        </Typography>
      </CustLink>

    </>
  )
}