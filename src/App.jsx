import {BrowserRouter, Route, Routes } from "react-router-dom";
import Cotizador from "./components/Cotizador";
import Presupuestos from "./components/Presupuestos";
import PresupuestosContext from "./context/PresupuestosContext";
import CotizadorContext from "./context/CotizadorContext";
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
const App = () => {
  const [elementos, setElementos] = useState({metros:20,propiedad:0, ubicacion:0});
  const [presupuestos, setPresupuestos] = useLocalStorage("presupuestos", []);
  return ( 
          <>
          <PresupuestosContext.Provider value={{presupuestos, setPresupuestos}}>
            <CotizadorContext.Provider value={{elementos, setElementos}}>
              <BrowserRouter>
               <Routes>
                  <Route path="/" index element={<Cotizador/>}></Route>
                  <Route path="/presupuestos" element={<Presupuestos />}></Route>
                </Routes>
              </BrowserRouter>
            </CotizadorContext.Provider>
          </PresupuestosContext.Provider>
          </>
  );
};
export default App;
