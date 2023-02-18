import React, { useMemo } from 'react'
import './App.css'
import { CssBaseline ,ThemeProvider} from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { themeSettings } from './them.js'
import { useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './scenes/dashboard/Dashboard'
import Layout from './scenes/layout/Layout'
import Products from './scenes/products/Products'
import Customers from './scenes/customer/Customers'
import Transction from './scenes/transction/Transction'
import Geography from './scenes/geography/Geography'
import OverView from './scenes/overview/OverView'
import Daily from './scenes/daily/Daily'
import Monthly from './scenes/monthly/Monthly'
import BreakDown from './scenes/breakdown/BreakDown'
import Admin from './scenes/admin/Admin'
import Performance from './scenes/performance/Performance'




const App = () => {
  const mode = useSelector((state)=>state.global.mode)
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode])
  return (
    <div className='app'>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Navigate to="/dashboard" replace/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/customers' element={<Customers/>}/>

              <Route path="/transaction" element={<Transction/>} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<OverView />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<BreakDown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performence" element={<Performance />} />
          </Route>
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
