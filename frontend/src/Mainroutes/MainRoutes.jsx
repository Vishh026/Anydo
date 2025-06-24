import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AllTask from '../Pages/AllTask'
import Calender from '../Pages/Calender'
import Myday from '../Pages/Myday'
import SevenNextdays from '../Pages/SevenNextdays'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Personal from '../Pages/Personal'
import Working from '../Pages/Working'
import Glosary from '../Pages/Glosary'
// import Home from '../Pages/Home'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
          <Route path='/login' element = {<Login/>} />
          <Route path='/signup' element = {<Signup/>} />
        
        <Route path= "/" element={<Navigate to = "/myday"  replace/>} />
        <Route path='/myday' element={<Myday/>}/>
        <Route path='/nextsevendays' element={<SevenNextdays/>}/>
        <Route path='/alltask' element = {<AllTask />}/>
        <Route path='/calender' element = {<Calender/>}/>

        <Route path ="/mylist/personal" element={<Personal />} />
        <Route path ="/mylist/work" element={<Working />}/>
        <Route path ="/mylist/glosary" element={<Glosary />}/>

      </Routes>
    </div>
  )
}

export default MainRoutes