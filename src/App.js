import React from 'react'
import styled from 'styled-components'
import Header from './components/header/header'
import Home from './components/Home/home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Detail from './components/pages/detail'

const App=()=> {
  return (
    <Container>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
const Container = styled.div`
width: 100%;
`