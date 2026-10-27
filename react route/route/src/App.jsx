import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'


function HOME(){
return <h1>THIS IS MY HOME PAGE</h1>
}


function ABOUT(){
  return <h1>THIS IS MY ABOUT PAGE</h1>

}


function PHONE(){
  return <h1>THIS IS MY PHONE NO.</h1>

}

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <Link to="/">HOME </Link> |{ " " }
        <Link to="/about">ABOUT</Link>  |{ " " }
        <Link to="/phone">PHONE</Link>  { " " }
      </nav>

      <Routes>
        <Route path="/" element={<HOME/>} />
        <Route path="/about" element={<ABOUT/>}/>
        <Route path="/phone" element={<PHONE/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
