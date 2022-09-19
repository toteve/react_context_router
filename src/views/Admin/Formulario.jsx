// importar componentes de react-bootstrap
import { Form, Button } from "react-bootstrap";

// importar useState y useContext
import { useState, useContext } from "react";

// importar el contexto creado en archivo Context.js
import Context from "../../Context";


export default function Formulario() {
  // consumo del contexto global
  const { publicaciones, setPublicaciones } = useContext(Context);
  // state local para manejarlo
  const [publicacion, setPublicacion] = useState({});

  // una sola funcion para manejar los cambios de cada campo name toma cada campo y value su valor
  const handleChange = (element) => {
    console.log("Name: ",name)
    console.log("Value: ",value)
    const { name, value } = element;
    publicacion[name] = value;
    setPublicacion({ ...publicacion }); // actualiza las publicaciones con los cambios en state local
  };

  // funcion llamada cuando se hace click en boton del formulario para agregar con spread operator
  const agregarPublicacion = () => {
     // actualiza al agregar la publicacion local a publicaciones global
    setPublicaciones([...publicaciones, { ...publicacion }]);
    alert("Publicación agregada con éxito");
  };

  return (
    // el evento onChange llama a una funcion comun handleChange para el cambio de todos los campos
    <Form className="row col-10 col-sm-9 col-md-8 col-lg-6 mx-auto mt-5 border border-light rounded p-4">
      <h5 className="mb-3">Nueva publicación</h5>
      <hr />
      <Form.Group className="mb-3 col-12 col-md">
        <Form.Label>Título</Form.Label>
        <Form.Control
          value={publicacion.titulo}
          name="titulo"
          onChange={({ target }) => handleChange(target)}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12 col-md" controlId="formBasicEmail">
        <Form.Label>Foto URL</Form.Label>
        <Form.Control
          name="foto"
          onChange={({ target }) => handleChange(target)}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12 col-md" controlId="formBasicEmail">
        <Form.Label>Color</Form.Label>
        <Form.Control
          name="color"
          onChange={({ target }) => handleChange(target)}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-12" controlId="formBasicEmail">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          name="descripcion"
          onChange={({ target }) => handleChange(target)}
        />
      </Form.Group>
      <Button
        onClick={agregarPublicacion}  // llamada a funcion que actualiza las publicaciones del contexto
        variant="light"
        className="col-5 col-sm-4 col-md-3 mx-auto"
      >
        Agregar
      </Button>
    </Form>
  );
}
