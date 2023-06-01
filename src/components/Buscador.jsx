import React, { useState } from "react";
import { Form, FormControl, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ArrowRight } from "react-bootstrap-icons";

const Buscador = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // setPacientes([...pacientes, data]);
        // reset();
    };
    return (
        <Container className="container border p-2">
            <Form
                onSubmit={handleSubmit(onSubmit)}
                className="row row g-0 text-center pt-2"
            >
                <div className="col-6 col-md-4">
                    <Form.Text>Buscar por Categoria</Form.Text>
                </div>
                <div className="col-sm-6 col-md-8">
                    <Form.Group className="mb-3">
                        <Form.Select {...register("categoria")}>
                            <option value="tecnologia">business</option>
                            <option value="technology">technology</option>
                            <option value="entertainment">entertainment</option>
                            <option value="general">general</option>
                            <option value="health">health</option>
                            <option value="science">science</option>
                            <option value="sport">sports</option>
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
