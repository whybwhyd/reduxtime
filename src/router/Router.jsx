import{BrowserRouter,Routes,Route} from "react-router-dom";
import Detail from "../pages/Detail"
import Main from "../pages/Main"
import React from 'react'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/:id" element={<Detail/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router;