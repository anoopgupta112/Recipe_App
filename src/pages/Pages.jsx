import React from 'react'
import Home from './Home'
import Cusine from './Cusine';
import { Route, Routes } from 'react-router-dom';
import Searched from './Searched';
import Respice from './Respice';


function Pages() {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:type' element={<Cusine />} />
            <Route path='/searched/:search' element={<Searched />} />
            <Route path='/recipe/:name' element={<Respice />} />

        </Routes>

    )
}

export default Pages;