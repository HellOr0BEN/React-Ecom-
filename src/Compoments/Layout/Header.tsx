import React from 'react'
import { Stack, Typography, Button, AppBar, Toolbar, Container,Menu,MenuItem } from '@mui/material'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Header = () => {
    return (
        <>
            <AppBar position='static' sx={{ backgroundColor: 'black' }} >
                <Container maxWidth='xl' >

                    <Toolbar >
                        <Stack direction={'row'} alignItems='center' justifyContent={'space-between'} width='100% ' >
                            <Typography>Discount Offer</Typography>
                            <Button variant='text' color='inherit'><PersonPinIcon />Login/Register</Button>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
            <AppBar position='static' sx={{ backgroundColor: 'black' }} >
                <Container maxWidth='xl' >
                    <Toolbar>
                        <Stack direction={'row'} alignItems='center' justifyContent={'space-between'} width='100% ' >
                            <Typography variant='h4'>LoGo</Typography>
                            <Stack direction={'row'} gap={2}>
                                <AudioMenu/>

                            </Stack>
                            <PersonPinIcon/>

                        </Stack>

                    </Toolbar>
                </Container>
            </AppBar>
        </>



    )
}

export default Header


const AudioMenu = () =>{
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null)
    };
  
    return (
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onMouseOver={handleClick}
          onMouseLeave={handleClose}
          
          variant='text'
          endIcon={<KeyboardArrowDownIcon/>}
          sx={{color:'white', display: "block", padding: "10px"}}

        >
          Audio
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
