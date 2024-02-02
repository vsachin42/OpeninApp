import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../Pages/SignIn'
import Upload from '../Pages/Upload'
import Uploaded from '../Pages/Uploaded'
import SignUp from '../Pages/SignUp'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/uploaded' element={<Uploaded/>}/>
        <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  )
}

export default MainRoutes