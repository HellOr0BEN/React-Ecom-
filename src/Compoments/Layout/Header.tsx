
import { Stack, Typography, Button, AppBar, Toolbar, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";
import { Box } from '@mui/system';
import { AppContext } from '../../Context/AppContext';


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
  const {addToCart} = useContext(AppContext)
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
      <AppBar position='sticky' sx={{ backgroundColor: "black" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Stack
              direction={"row"}
              alignItems="center"
              justifyContent={"space-between"}
              width="100% "
            >
              <CustLink to='/' >
                <Typography variant="h4">LoGo</Typography>
              </CustLink>

              <Stack direction={"row"} gap={8}>
                <NavLinks  />
              </Stack>
            
              <Stack direction={'row'} gap={2}>
                { addToCart !==0 ? (
                <Stack direction={'row'}>
                  
                  <ShoppingCartIcon />
                 
                  
                  <Box sx={{ borderRadius: "50%", background: "yellow", height: "20px", width: "20px", position: 'relative', bottom: '10px', right: '10px', display:"flex",justifyContent:"center" }} >
                    {/* sx={{ border: '1px solid white', borderRadius: '50%', position: 'relative', bottom: '20px', right: '5px', width: '30px', height: '30px' }} */}
                    <Typography sx={{color:"black" }}>{addToCart}</Typography>
                  </Box>
                </Stack> ) : (<ShoppingCartIcon />)
                }

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
      <CustLink to="/audio"  >
        <Typography sx={{ color: "white", fontWeight: 'bold' }}>
          <Stack direction={'row'} alignItems='center' sx={{ cursor: 'pointer' }}>
            Audio

          </Stack>
        </Typography>
      </CustLink>
      <CustLink to="/energy">
        <Typography sx={{ color: "white", fontWeight: 'bold' }}>
          <Stack direction={'row'} alignItems='center' sx={{ cursor: 'pointer' }}>
            Energy

          </Stack>
        </Typography>
      </CustLink>
      <CustLink to="/protection">
        <Typography sx={{ color: "white", fontWeight: 'bold' }}>
          <Stack direction={'row'} alignItems='center' sx={{ cursor: 'pointer' }}>
            Protection

          </Stack>
        </Typography>
      </CustLink>
      <CustLink to="/life">
        <Typography sx={{ color: "white", fontWeight: 'bold' }}>
          <Stack direction={'row'} alignItems='center' sx={{ cursor: 'pointer' }}>
            Life

          </Stack>
        </Typography>
      </CustLink>
      <CustLink to="/sale">
        <Typography sx={{ color: "white", fontWeight: 'bold' }}>
          <Stack direction={'row'} alignItems='center' sx={{ cursor: 'pointer' }}>
            Sale

          </Stack>
        </Typography>
      </CustLink>

    </>
  )
}