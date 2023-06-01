import React from "react";
import { Button, Card } from "react-bootstrap";

const CardNoticias = ({ noticias }) => {
    return (
        <>
            {noticias.map((naticias, index) => (
                <Card key={index} className="my-3 cards col-lg-3 col-md-4 m-1 ">
                    <Card.Body>
                        <div className="d-flex ">
                            <Card.Title className=" mx-auto">{naticias.title}</Card.Title>
                        </div>
                        <hr />
                        <div className="my-4">
                            <Card.Img
                                src={naticias.urlToImage}
                                className="mx-auto d-block"
                            />
                            <Card.Text className="my-3">
                                Description :{" "}
                                <span className="p-1"> {naticias.description}</span>
                            </Card.Text>
                            <Card.Text className="my-3">
                                Content :{" "}
                                <span className="p-1"> {naticias.content} </span>
                            </Card.Text>
                        </div>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-center">
                        <Button
                            className="col-7 botonFormulario"
                            variant="danger"
                            onClick={noticias.url}
                        >
                            Borrar
                        </Button>
                    </Card.Footer>
                </Card>
            ))}
        </>
    );
};

export default CardNoticias;
