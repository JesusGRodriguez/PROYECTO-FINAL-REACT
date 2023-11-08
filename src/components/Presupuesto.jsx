const Presupuesto = (propiedades) => {
    return<li> 
            {Object.keys(propiedades).map((propiedad, indice) => (
            <p key={indice}>
                {propiedad}:{propiedades[propiedad]}
            </p>
            ))}
        </li>;
};
export default Presupuesto;