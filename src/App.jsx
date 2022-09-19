import "./styles.css";

// IMPORTAR LOS COMPONENTES RELACIONADOS CON LAS RUTAS
import { BrowserRouter, Routes, Route } from "react-router-dom";

// views importar las vistas
import Home from "./views/Home/Home";
import Admin from "./views/Admin/Admin";

// components importar LAS COMPONENTES
import Navbar from "./components/Navbar";

// importar los state y el context 
import { useState } from "react";
import Context from "./Context";

export default function App() {

  // definimos el state local del componente
  const [publicaciones, setPublicaciones] = useState([]);
  // definimos el objeto con el state global del contexto
  const globalState = { publicaciones, setPublicaciones };

  return (
    <div className="App text-light">
      {/* envolver dentro del provider toda la aplicacion pasando como props el estado global */}
      <Context.Provider value={globalState}>
        {/* si vamos a usar rutas envolver las rutas dentro del BrowseRouter */}
        <BrowserRouter>
           {/* llamado al componente Navbar importado desde /components */}
          <Navbar />
          {/* definicion general de las rutas a implementar con Routes importado de react.router-dom */}
          <Routes>
            {/* definicion individual de que hacer con cada ruta individual y llamar a la vista asociada */}
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
