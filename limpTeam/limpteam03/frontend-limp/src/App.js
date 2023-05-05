import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import CreateNote from './components/CreateNote';
import Navigation from './components/Navigation';
import NoteList from './components/NoteList';
import CreateCliente from './components/CreateCliente';
import CreateProduct from './components/CreateProduct';


function App() {
  return (
    <>
    <Router>  {/* Aca estamos creando un enrutador donde tendremos todas las rutas de la navegacion */}
    <Navigation />
    <div className='container p-4'>
      <Routes>
        <Route path="/" element={<NoteList/>}></Route>
        <Route path="/edit/:id" element={<CreateNote/>}></Route>
        <Route path="/createCliente" element={<CreateCliente/>}></Route>
        <Route path="/createNote" element={<CreateNote/>}></Route>
        {/* <Route path="/products" element={<Products/>}></Route> */}
        <Route path="/createProduct" element={<CreateProduct/>}></Route>
      </Routes>
    </div>
    </Router>
    </>
  )

}

export default App;
