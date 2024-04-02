
import { Button, Container, ContainerBox, Footer, Row, ButtonCad } from "./styles";
import { Input } from "../../components/Input";
import * as Yup from 'yup';
import styled from "styled-components";
import { Form, Formik } from "formik";
import { useState } from "react";
import api from '../../services/api'

function EditRegister() {


    const initialValues = {
        responsavel: null,
        nome: "",
        sobrenome: "",
        dataNascimento: "",
        cpf: "",
        Peso: 0,
        Altura: 0,
        Email: "",
        Telefone: "",
        Logradouro: "",
        Número: "",
        Complemento: "",
        Bairro: "",
        CEP: "",
        Cidade: "",
        UF: ""
    };

    const formatDate = (dateString) => {
        const parts = dateString.split('-');
        if (parts.length === 3) {
            const [year, month, day] = parts;
            return `${day}/${month}/${year}`;
        } else {
            return dateString; 
        }
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        console.log(values);
        try {
            const confirmar = window.confirm("Tem certeza que deseja modificar?");
            if (!confirmar) {
                setSubmitting(false);
                return;
            }
    
            values.dataNascimento = formatDate(values.dataNascimento);
    
            const response = await api.patch(`/${values.cpf}`, values);
            console.log(response.data);
    
            setSubmitting(false);
    
            alert('Dados do aluno alterados!');
        } catch (error) {
            console.error(error);
            alert('Erro ao alterar dados do aluno: ' + error.message);
            setSubmitting(false);
        }
    }; 

    return(
        <Container>
            <h1>Editar Cadastro</h1>
            <p>Para Alterar os dados do Cadastro preencha o campo CPF e os demais dados do Aluno. </p>
            <ContainerBox>
                <Formik 
                    onSubmit={handleSubmit}
                    initialValues={initialValues}
                >
                    {({ values, isSubmitting }) => (
                        <Form style={{ width: "90%" }}>
                            <Row>
                                <Input name="nome"  required />
                                <Input name="sobrenome" required  />
                            </Row>
                            <Row>
                                <Input
                                    name="dataNascimento"
                                    type="date"
                                    label="Data de Nascimento"
                                    required
                                />
                                <Input name="cpf"
                                    label="cpf"
                                    required 
                                    />
                            </Row>
                            <Row>
                                <Input name="Peso"
                                    label="Peso"
                                    type="number"
                                    required 
                                    />
                                <Input name="Altura"
                                    label="Altura"
                                    type="number"
                                    required
                                    />
                            </Row>

                            <Row>
                                <Input name="Logradouro" required />
                                <Input name="Cidade" required  />
                                <Input name="UF" required  />
                            </Row>

                            <Row>
                                <Input name="Número" required   />
                                <Input name="Complemento"  />
                            </Row>

                            <Row>
                                <Input name="CEP" required  />
                                <Input name="Bairro" required  />
                            </Row>

                            <Row>
                                <Input name="Email" type="email" required  />
                                <Input name="Telefone" required   />
                            </Row>

                            <Row>
                                <Input name="Nome do Responsavel" required />
                                <Input name="Sobrenome do Responsavel" required />
                            </Row>
                            <Row>
                                <Input
                                    name="dataNascimento-responsavel"
                                    type="date"
                                    label="Data de Nascimento do Responsável"
                                    required
                                />
                                <Input name="CPF do Responsável"
                                    label="CPF do Responsável"
                                    required />
                            </Row>

                           

                        


                            <Footer>
                                <Button type="submit" disabled={isSubmitting}>
                                    Alterar
                                </Button>
                            </Footer>
                        </Form>
                    )}
                </Formik>
            </ContainerBox>
        
        
        
        
        </Container>
    )
}

export default EditRegister