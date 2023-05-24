import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navigation from './components/Navigation';
import Clientes from './components/Clientes';
import CreateCliente from './components/CreateCliente';
import Products from './components/Products';
import CreateProduct from './components/CreateProduct';
import Proveedores from './components/Provedores';
/* import Pruebas from './components/Pruebas'; */



function App() {
  return (
    <>
    <Router>  {/* Aca estamos creando un enrutador donde tendremos todas las rutas de la navegacion */}
    <Navigation />
    <div className='container p-4' style={{ maxWidth: 'auto' }}>
      <Routes>
        <Route path="/clientes" element={<Clientes/>}></Route>
        <Route path="/createCliente" element={<CreateCliente/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/createProduct" element={<CreateProduct/>}></Route>
        <Route path="/proveedores" element={<Proveedores/>}></Route>
        <Route path="/createProduct" element={<CreateProduct/>}></Route>
      </Routes>
    </div>
    </Router>
 {/*    <Pruebas/> */}
    </>
  )

}

export default App;
