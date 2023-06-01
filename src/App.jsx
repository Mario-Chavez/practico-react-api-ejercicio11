import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import Buscador from "./components/Buscador";
import CardNoticias from "./components/cardNoticias";
import TituloDeBusqueda from "./components/TituloDeBusqueda";

const API_KEY = "8e50655ccb6b4e7a81dcf4926b6527bb";

function App() {
    const [noticias, setNoticias] = useState([]);
    const [mostrarSpiner, setMostrarSpiner] = useState(true);
    const [titulo, setMostrarTitulo] = useState(true);

    useEffect(() => {
        busquedaCategoria();
    }, []);

    // const consultarApi = async () => {
    //     try {
    //         const resp = await fetch(
    //             ` https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    //         );
    //         const dato = await resp.json();
    //         setNoticias(dato.articles);
    //         console.log(noticias);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    const busquedaCategoria = async (category) => {
        category === undefined ? setMostrarTitulo(true) : setMostrarTitulo(false);

        try {
            setMostrarSpiner(true);
            const resp = await fetch(
                `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY} `
            );
            const dato = await resp.json();
            console.log(dato);
            setNoticias(dato.articles);
            setMostrarSpiner(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Container className="my-5 mainPage">
                <h1 className="display-4 text-center">Practico ReactJS ejercicio 10</h1>
                <hr />
                <Buscador categoria={busquedaCategoria} />
                {titulo === true ? <TituloDeBusqueda /> : ""}
                {mostrarSpiner ? (
                    <div className="my-5 p-4 text-center">
                        <Spinner
                            animation="border"
                            role="status"
                            variant="primary"
                        ></Spinner>
                    </div>
                ) : (
                    <section className="row justify-content-evenly mt-5">
                        <CardNoticias noticias={noticias} />
                    </section>
                )}
            </Container>
            <footer className="bg-dark text-light text-center py-5">
                <p> &copy; Todos los derechos reservados</p>
            </footer>
        </>
    );
}

export default App;
