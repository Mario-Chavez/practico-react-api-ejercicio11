import React from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import foto from "../assets/Image_not_available.png";

const CardNoticias = ({ noticias }) => {
    return (
        <>
            {noticias == undefined ? (
                <div className="my-5 p-4 text-center">
                    <Spinner animation="border" role="status" variant="primary"></Spinner>
                </div>
            ) : (
                noticias.map((naticias, index) => (
                    <Card
                        key={index}
                        className="my-5 cards col-lg-3 col-md-4 m-1 shadow shadow-lg "
                    >
                        <Card.Body>
                            <div className="d-flex ">
                                <Card.Title className=" mx-auto">
                                    {naticias.title}
                                </Card.Title>
                            </div>
                            <Card.Text className="d-flex justify-content-end text-danger">
                                {" "}
                                {naticias.country[0]}
                            </Card.Text>
                            <hr />
                            <div className="my-4">
                                {!naticias.image_url ? (
                                    <Card.Img src={foto} className="mx-auto d-block" />
                                ) : (
                                    <Card.Img
                                        src={naticias.image_url}
                                        className="mx-auto d-block"
                                    />
                                )}
                                <Card.Text className="d-flex mt-3 justify-content-star text-primary">
                                    {" "}
                                    Text in {naticias.language}
                                </Card.Text>
                                <Card.Text className="my-3">
                                    * <span className="p-1"> {naticias.description}</span>
                                </Card.Text>
                                <Card.Text className="my-3 text-truncate">
                                    *{" "}
                                    <span
                                        className="p-1 d-inline-block text-truncate"
                                        style={{ maxWidth: "200px" }}
                                    >
                                        {naticias.content}
                                    </span>
                                </Card.Text>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-center">
                            <Button
                                className="col-7 btn btn-outline-primary"
                                variant=""
                                onClick={() => {
                                    window.open(naticias.link, "_blank");
                                }}
                            >
                                Ver Mas <ArrowRight />
                            </Button>
                        </Card.Footer>
                    </Card>
                ))
            )}
        </>
    );
};

export default CardNoticias;
