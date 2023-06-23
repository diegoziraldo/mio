import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/botones";
import "bootstrap/dist/css/bootstrap.css";

import Index from './components/index'
import Presupuestos from "./components/presupuestos";
import Clientes from "./components/clientes";
import Reparaciones from "./components/reparaciones";
import AddArticles from "./components/addArticles";
import ComponentInput from "./components/inputComponents";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
