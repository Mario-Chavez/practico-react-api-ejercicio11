import React from "react";
import { Button, Card } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import foto from "../assets/Image_not_available.png";

const CardNoticias = ({ noticias }) => {
    return (
        <>
            {noticias.map((naticias, index) => (
                <Card
                    key={index}
                    className="my-5 cards col-lg-3 col-md-4 m-1 shadow shadow-lg "
                >
                    <Card.Body>
                        <div className="d-flex ">
                            <Card.Title className=" mx-auto">{naticias.title}</Card.Title>
                        </div>
                        <Card.Text className="d-flex justify-content-end text-danger">
                            {" "}
                            {naticias.author}
                        </Card.Text>
                        <hr />
                        <div className="my-4">
                            {!naticias.urlToImage ? (
                                <Card.Img src={foto} className="mx-auto d-block" />
                            ) : (
                                <Card.Img
                                    src={naticias.urlToImage}
                                    className="mx-auto d-block"
                                />
                            )}
                            <Card.Text className="my-3">
                                * <span className="p-1"> {naticias.description}</span>
                            </Card.Text>
                            <Card.Text className="my-3">
                                * <span className="p-1"> {naticias.content} </span>
                            </Card.Text>
                        </div>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-center">
                        <Button
                            className="col-7 btn btn-outline-primary"
                            variant=""
                            onClick={() => {
                                window.open(naticias.url, "_blank");
                            }}
                        >
                            Ver Mas <ArrowRight />
                        </Button>
                    </Card.Footer>
                </Card>
            ))}
        </>
    );
};

export default CardNoticias;
