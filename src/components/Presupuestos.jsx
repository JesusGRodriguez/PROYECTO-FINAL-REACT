import { Link } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import usePresupuestos from "../hooks/usePresupuestos";
import Presupuesto from "./Presupuesto"
const Presupuestos = () => {
    const {presupuestos} = usePresupuestos();
    return (
            <>
                <nav>
                    <Link to={"/"}>
                        <FaHouse />
                    </Link>
                </nav>
                <ul>{presupuestos.map((elemento, indice) => <Presupuesto key={indice} {...elemento}/>)}</ul>
            </>
    );
};
export default Presupuestos;