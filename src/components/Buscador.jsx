import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ArrowRight } from "react-bootstrap-icons";

const Buscador = ({ categoria }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        categoria(data.categoria);
        reset();
    };
    return (
        <Container className="container border p-2 mt-5 shadow shadow-lg">
            <Form
                onSubmit={handleSubmit(onSubmit)}
                className="row row g-0 text-center pt-2"
            >
                <div className="col-6 col-md-4">
                    <Form.Text>
                        <h4>Buscar por Categoria</h4>
                    </Form.Text>
                </div>
                <div className="col-sm-6 col-md-8">
                    <Form.Group className="mb-3">
                        <Form.Select {...register("categoria")}>
                            <option value="technology">Tecnologia</option>
                            <option value="business">Negocios</option>
                            <option value="entertainment">Entretenimiento</option>
                            <option value="politics">Politica</option>
                            <option value="top">Mas leidas</option>
                            <option value="science">Ciencia</option>
                            <option value="sports">Deportes</option>
                            <option value="food">Comida</option>
                            <option value="health">Salud</option>
                            <option value="tourism">Turismo</option>
                            <option value="world ">Noticias del mundo</option>
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className="d-flex justify-content-end">
                    <Button type="submit" className="col-1">
                        Buscar <ArrowRight />
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default Buscador;
