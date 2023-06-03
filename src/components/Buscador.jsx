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
        categoria(data.categoria, data.pais);
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
                        <h4>Buscar por Pais</h4>
                        <h4>Buscar por Categoria</h4>
                    </Form.Text>
                </div>
                <div className="col-sm-6 col-md-8">
                    <Form.Group className="mb-3">
                        <Form.Select
                            {...register("pais", {
                                required: "El dato es obligatorio",
                            })}
                        >
                            <option value="">Elige pais</option>
                            <option value="af">Afganistan</option>
                            <option value="ar">Argentina</option>
                            <option value="au">Australia</option>
                            <option value="be">Begica</option>
                            <option value="br">Brazil</option>
                            <option value="ca">Canada</option>
                            <option value="cn">China</option>
                            <option value="dm">Dominicana</option>
                            <option value="fr">Francia</option>
                            <option value="in ">India</option>
                            <option value="mx ">Mexico</option>
                            <option value="nz ">Nueva Zelanda</option>
                            <option value="pt ">Portugal</option>
                            <option value="es ">España</option>
                            <option value="ae ">Emiratos Arabes</option>
                            <option value="gb ">Reino Unido</option>
                        </Form.Select>
                        <Form.Text className="text-danger d-flex">
                            {errors.pais?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Select
                            {...register("categoria", {
                                required: "El dato es obligatorio",
                            })}
                        >
                            <option value="">Elige categoria</option>
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
                        <Form.Text className="text-danger d-flex">
                            {errors.categoria?.message}
                        </Form.Text>
                    </Form.Group>
                </div>
                <div className="d-flex justify-content-end">
                    <Button type="submit" className="col-lg-1 ">
                        Buscar <ArrowRight />
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default Buscador;
