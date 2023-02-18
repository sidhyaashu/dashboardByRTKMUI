import React from 'react'
import { Box,Typography,useTheme } from "@mui/material"

const Header = ({title,subtitle}) => {
    const them = useTheme()

  return (
    <Box>
        <Typography variant='h2' color={them.palette.secondary[100]} fontWeight="bold" sx={{mb:"5px"}}>
            {title}
        </Typography>
        <Typography variant='h5' color={them.palette.secondary[300]} sx={{mb:"5px"}}>
            {subtitle}
        </Typography>
      
    </Box>
  )
}

export default Header
