import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/botones";
import "bootstrap/dist/css/bootstrap.css";

import Index from './components/index'
import Presupuestos from "./components/presupuestos/presupuestos";
import Clientes from "./components/clientes/Clientes";
import Reparaciones from "./components/reparaciones/reparaciones";
import AddArticles from "./components/stock/addArticles";
import ComponentInput from "./components/stock/inputComponents";
import SimularPresupuestos from "./components/presupuestos/simularPresupuestos";
import CrearPresupuestos from "./components/presupuestos/crearPresupuestos";
import PresupuestosArmados from "./components/presupuestos/presupuestosArmados";


function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/presupuestos" element={<Presupuestos />}></Route>
          <Route path="/clientes" element={<Clientes />}></Route>
          <Route path="/reparaciones" element={<Reparaciones />}></Route>
          <Route path="/stock" element={<AddArticles />}></Route>
          <Route path="/addarticles" element={<ComponentInput />}></Route>
          <Route path="/simularPresupuestos" element={<SimularPresupuestos />}></Route>
          <Route path="/crearPresupuestos" element={<CrearPresupuestos />}></Route>
          <Route path="/presupuestosArmados" element={<PresupuestosArmados />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
