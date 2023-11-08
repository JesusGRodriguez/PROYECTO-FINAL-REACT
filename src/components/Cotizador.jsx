import { Link } from "react-router-dom";
import { PiClipboardTextBold } from "react-icons/pi";
import Opciones from "./Opciones";
import { useEffect, useState } from "react";
import useCotizador from "../hooks/useCotizador";
import usePresupuestos from "../hooks/usePresupuestos";
import Swal from "sweetalert2";
const Cotizador = () => {
    const [precio, setPrecio] = useState(0);
    const [datos, setDatos] = useState([]);
    const {elementos, setElementos} = useCotizador();
    const {presupuestos, setPresupuestos} = usePresupuestos();
    const realizarCotizacion = () => {
        const {metros, propiedad, ubicacion} = elementos
        if(metros<20 || propiedad == 0 || ubicacion == 0){
            Swal.fire('Error', "Debes completar los datos", "error");
        }
        const cuenta = 7000 * metros * propiedad * ubicacion;
        setPrecio(cuenta);
    };
    const guardar = () => {
        setPresupuestos([
            ...presupuestos, 
            {
                fecha: new Date().toDateString(),
                ...elementos,
                cuenta: 7000 * elementos.metros * elementos.propiedad * elementos.ubicacion
            },
        ]);
        setPrecio(0);
    }
    useEffect(() => {
        const leer = async () => setDatos(await (await fetch("/data.json")).json());
        leer();
    }, []);
    return ( <>
                <h1>Seguros Del Hogar</h1>
                <nav>
                    <Link to={"/presupuestos"}>
                        <PiClipboardTextBold />
                    </Link>
                </nav>

                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <Opciones datos={datos.filter(({categoria}) => categoria == "propiedad")} label={"Selecciona el Tipo de Propiedad"} tipo={"propiedad"}/>
                    <Opciones datos={datos.filter(({categoria}) => categoria == "ubicacion")} label={"Selecciona la Ubicación"} tipo={"ubicacion"}/>
                    <label htmlFor="metros">Ingresa los Metros Cuadrados</label>
                    <input 
                    type="number" 
                    id="metros" 
                    min={20} 
                    defaultValue={20} 
                    onInput={(e) => setElementos({...elementos, metros: isNaN(parseInt(e.target.value))
                     ? 20 
                     : parseInt(e.target.value) 
                     < 20 ? 20 
                     : parseInt(e.target.value)})
                     }
                     />
                    <button type="button" onClick={realizarCotizacion}>Cotizar</button>
                </form>
                {precio != 0 && (
                <>
                    <p>El Precio estimado es de ${precio.toFixed(2)}</p>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <button type="button" onClick={(guardar)}>Guardar</button>
                    </form>
                </> 
                )}
            </>
    );
};
export default Cotizador;