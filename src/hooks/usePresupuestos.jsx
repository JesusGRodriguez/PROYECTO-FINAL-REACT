import { useContext } from "react";
import PresupuestosContext from "../context/PresupuestosContext";

const usePresupuestos = () => useContext(PresupuestosContext);
export default usePresupuestos;