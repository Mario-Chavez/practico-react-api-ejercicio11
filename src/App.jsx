import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Buscador from "./components/Buscador";

function App() {
    const [personaje, setPersonaje] = useState({});
    const [mostrarSpiner, setMostrarSpiner] = useState(true);

    useEffect(() => {
        consultarApi();
    }, []);

    const consultarApi = async () => {
        /* realizamos una peticion get a la API */
        try {
            setMostrarSpiner(true);
            const resp = await fetch(
                "https://newsapi.org/v2/everything?q=bitcoin&apiKey=8e50655ccb6b4e7a81dcf4926b6527bb"
            );
            const dato = await resp.json();
            console.log(dato);
            // setPersonaje(dato[0]);
            //  setMostrarSpiner(false)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Container className="my-5 mainPage">
                <h1 className="display-4 text-center">Practico ReactJS ejercicio 10</h1>
                <hr />

                <Buscador />
            </Container>
            <footer className="bg-dark text-light text-center py-5">
                <p> &copy; Todos los derechos reservados</p>
            </footer>
        </>
    );
}

export default App;
