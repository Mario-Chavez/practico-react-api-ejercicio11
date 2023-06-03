import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import Buscador from "./components/Buscador";
// import CardNoticias from "./components/cardNoticias";
import CardNoticias from "./components/CardNoticias.jsx";
import TituloDeBusqueda from "./components/TituloDeBusqueda";

const API_KEY = "pub_2392258230da6fa37c014d61d4b3ee5de65bf";

function App() {
    const [noticias, setNoticias] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {}, [noticias]);

    const busquedaCategoria = async (category) => {
        try {
            setIsLoading(true);
            const resp = await fetch(
                // `https://newsapi.org/v2/top-headlines?category=&apiKey= `
                `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=${category} `
            );
            const dato = await resp.json();
            // console.log(dato.results);
            setNoticias([...noticias, ...dato.results]);
            setIsLoading(false);
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
                <TituloDeBusqueda />
                {isLoading ? (
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
