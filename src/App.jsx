import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import Buscador from "./components/Buscador";
// import CardNoticias from "./components/cardNoticias";
import CardNoticias from "./components/CardNoticias.jsx";
import TituloDeBusqueda from "./components/TituloDeBusqueda";

const API_KEY = "8e50655ccb6b4e7a81dcf4926b6527bb";

function App() {
    const [noticias, setNoticias] = useState([]) || [];

    useEffect(() => {}, [noticias]);

    const busquedaCategoria = async (category) => {
        try {
            const resp = await fetch(
                `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY} `
            );
            const dato = await resp.json();
            setNoticias(dato.articles);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Container className="my-5 mainPage">
                <h1 className="display-4 text-center">Practico ReactJS ejercicio 11</h1>
                <hr />
                <Buscador categoria={busquedaCategoria} />

                {noticias.length > 0 ? (
                    <section className="row justify-content-evenly mt-5">
                        <CardNoticias noticias={noticias} />
                    </section>
                ) : (
                    <TituloDeBusqueda />
                )}
            </Container>
            <footer className="bg-dark text-light text-center py-5">
                <p> &copy; Todos los derechos reservados</p>
            </footer>
        </>
    );
}

export default App;
