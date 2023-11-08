import { useContext } from "react";
import CotizadorContext from "../context/CotizadorContext";

const useCotizador = () => useContext(CotizadorContext);
export default useCotizador;