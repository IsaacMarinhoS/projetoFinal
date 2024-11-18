import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Home } from './Components/Home/home'
import { Header } from './Components/Header/header'
import { Favoritos } from './Components/Favoritos/favoritos';
import { ThemeProvider } from "./contexts/ThemeContext";
import { BlocoDeNotas } from './Components/BlocoDeNotas/BlocoDeNotas';
import { Professor } from './Components/Professores/professores';




function App() {


  return (
    <ThemeProvider>
     <Router>

       <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favoritos' element={<Favoritos/>}/>
        <Route path='/bloco-de-notas' element={<BlocoDeNotas/>} />
        <Route path='/ajuda-nos-estudos' element={<Professor/>} />

       
        
       </Routes>

     </Router>
     </ThemeProvider>

 
  )
}

export default App
