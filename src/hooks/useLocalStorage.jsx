import { useEffect, useState } from "react"

const useLocalStorage = (clave,valorInicial) => {
    const obtener = () =>{
        if(localStorage.getItem(clave)){
            return JSON.parse(localStorage.getItem(clave));
        }
        localStorage.setItem(clave,JSON.stringify(valorInicial));
        return valorInicial;
    }
    const [valor,setValor] = useState(obtener)

    useEffect(() => localStorage.setItem(clave,JSON.stringify(valorInicial)), [valor]);
    return [valor,setValor];
};

export default useLocalStorage;