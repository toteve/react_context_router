// importar componente de react-bootstrap
import { Container } from "react-bootstrap";
// importar useContext para consumir el contexto creado
import { useContext } from "react";

// importar el contexto desde carpeta donde esta el archivo Context.js
import Context from "../../Context";

// importamos el componente hermano Publicacion  que estan dentro /Home
import Publicacion from "./Publicacion";

export default function Home() {
  // variable la tomamos del contexto global
  const { publicaciones } = useContext(Context);

  return (
    <Container className="mt-5">
      <h1 className="pb-3">Publicaciones</h1>
      <div className="publicaciones row">
        {publicaciones.map((publicacion, i) => (
          <div className="col-12 col-sm-6 col-md-4" key={i}>
            <Publicacion publicacion={publicacion} />
          </div>
        ))}
      </div>
    </Container>
  );
}
