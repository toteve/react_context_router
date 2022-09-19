// importamos los componentes hermanos Formulario y Tabla  que estan dentro /Admin
import Formulario from "./Formulario";
import Tabla from "./Tabla";

export default function Admin() {
  return (
    <>
      {/* llamada a los componentes arriba importados */}
      <Formulario />
      <Tabla />
    </>
  );
}
