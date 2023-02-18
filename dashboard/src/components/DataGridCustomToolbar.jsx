import React from 'react'
import { 
    IconButton,
    TextField,
    InputAdornment,
    Box
} from "@mui/material"
import { 
    GridToolbarDensitySelector,
    GridToolbarContainer,
    GridToolbarExport,
    GridToolbarColumnsButton
} from '@mui/x-data-grid'
import FlexBetween  from './FlexBetween'
import { Search } from '@mui/icons-material'


const DataGridCustomToolbar = ({searchInput,setSearchInput,setSearch}) => {
  return (
    <GridToolbarContainer sx={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center"
    }}>
        <FlexBetween w='100%'  >
            <GridToolbarColumnsButton/>
            <GridToolbarDensitySelector/>
            <GridToolbarExport/>
        </FlexBetween>
      <TextField
      
      variant='standard'
      label = "Search.."
      sx={{mb:".5rem", width:"15rem"}}
      onChange={(e)=>setSearchInput(e.target.value)}
      value={searchInput}
      InputProps={{
        endAdornment:(
          <InputAdornment position='end'>
                <IconButton onClick={()=>{
                  setSearch(searchInput)
                  setSearchInput("")
                }}>
                    <Search/>
                </IconButton>
            </InputAdornment>
        )
      }}
      />
    </GridToolbarContainer>
  )
}

export default DataGridCustomToolbar
