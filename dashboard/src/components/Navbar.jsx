import React , {useState} from 'react'
import { 
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
    ArrowDropDownCircleOutlined,
 } from '@mui/icons-material'

import FlexBetween from './FlexBetween'
import { useDispatch } from 'react-redux'
import { setMode } from '../state/index'
import profileImage from '../assets/sidhya.jpg'
import { 
    AppBar,
    Box,
    useTheme,Toolbar,
    IconButton,
    InputBase,
    Button,
    Typography,
    Menu,
    MenuItem
 } from '@mui/material'

const Navbar = ({
        user,
        isSidebarOpen,
        setIsSidebarOpen,
}) => {
    const dispatch = useDispatch()
    const them = useTheme()



    const [anchorEl,setAnchorEl] = useState(null)
    const isOpen = Boolean(anchorEl)
    const handleClick =(e)=>setAnchorEl(e.currentTarget)
    const handleClose =()=>setAnchorEl(null)


  return (
    <AppBar sx={{position:"static",background:"none",boxShadow:"none" }}>
        <Toolbar sx={{justifyContent:"space-between"}}>
            {/* leftside */}
            <FlexBetween>
                <IconButton onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
                    <MenuIcon/>
                </IconButton>
            

                <FlexBetween
                backgroundColor={them.palette.background.alt}
                borderRadius="9px"
                gap="3rem"
                p="0.1rem 1.5rem"
                >
                    <InputBase placeholder='Search..'/>
                    <IconButton><Search/></IconButton>
                </FlexBetween>
            </FlexBetween>

            {/* right side */}
            <FlexBetween gap="1.5rem">
                <IconButton onClick={()=>dispatch(setMode())}>
                    {them.palette.mode === 'dark'?(
                        <DarkModeOutlined sx={{fontSize:"25px"}}/>
                    ):(
                        <LightModeOutlined sx={{fontSize:"25px"}}/>
                    )}
                </IconButton>
                <IconButton>
                    <SettingsOutlined sx={{fontSize:"25px"}}/>
                </IconButton>

                <FlexBetween>
                    <Button
                    onClick={handleClick}
                    sx={{
                        display:'flex',
                        justifyContent:'space-between',
                        alignItems:"center",
                        textTransform:'none',
                        gap:'1rem'
                    }}
                    >
                        <Box
                            component='img'
                            alt='profile'
                            src={profileImage}
                            height='32px'
                            width='32px'
                            borderRadius='50%'
                            sx={{objectFit:'cover',cursor:'pointer'}}
                            />
                        
                        <Box textAlign='left' sx={{cursor:'pointer',display:'flex',gap:'1rem',alignItems:'center'}} >
                                    <Typography fontWeight='bold' fontSize='0.85rem' sx={{color:them.palette.secondary[100],}}>
                                        {user.name}
                                    </Typography>

                                    <Typography fontSize='0.75rem' sx={{color:them.palette.secondary[200]}}>
                                        {user.occupation}
                                    </Typography>
                                </Box>
                        <ArrowDropDownCircleOutlined sx={{color:them.palette.secondary[300],fontSize:'25px'}} />
                        {/* 2:06:30 */}

                        <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose}  anchorOrigin={{vertical:"bottom",horizontal:"center"}}>
                            <MenuItem onClick={handleClose} >Log Out</MenuItem>
                        </Menu>

                    </Button>

                </FlexBetween>

            </FlexBetween>
        </Toolbar>

    </AppBar>
  )
}

export default Navbar
