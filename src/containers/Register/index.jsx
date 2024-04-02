import { Button, Container, ContainerBox, Footer, Row, ButtonCad } from "./styles";
import { Input } from "../../components/Input";
import * as Yup from 'yup';
import styled from "styled-components";
import { Form, Formik } from "formik";
import { useState } from "react";
import api from '../../services/api'

function Register() {

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

    const validationSchema = Yup.object({
        nome: Yup.string()
            .min(3, "O campo deve ter no mínimo 3 caracteres")
            .required("Campo obrigatório"),
        sobrenome: Yup.string() .required("Campo obrigatório"),
        Email: Yup.string().email("Email inválido") .required("Campo obrigatório"),
        dataNascimento: Yup.date()
            .max(new Date(), "Não é possível incluir uma data futura")
            .required("Campo obrigatório"),
        Telefone: Yup.string()
            .max(13, "O Campo deve ter no máximo 13 caracteres")
             .required("Campo obrigatório"),
        cpf: Yup.string()  .max(11, "O Campo deve ter no máximo 11 caracteres") .required("Campo obrigatório"),
        Peso: Yup.number().min(0, "Peso não pode ser negativo").required("Campo Obrigatório"),
        Altura: Yup.number().min(0, "Altura não pode ser negativa").required("Campo Obrigatório"),
        Logradouro: Yup.string().required("Campo obrigatório"),
        Número: Yup.string() .required("Campo obrigatório"),
        Bairro: Yup.string().required("Campo obrigatório"),
        CEP: Yup.string() .required("Campo obrigatório"),
        Cidade: Yup.string().required("Campo obrigatório"),
        UF: Yup.string()
            .max(2, "O Campo deve ter no máximo 2 caracteres")
            .required("Campo obrigatório"),
    });

    const calcularIdade = (dataNascimento) => {
        const hoje = new Date();
        const nascimento = new Date(dataNascimento);
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mesAtual = hoje.getMonth() + 1;
        const mesNascimento = nascimento.getMonth() + 1;
        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
            idade--;
        }
        return idade;
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

       

        console.log(values)
        try {
            const idade = calcularIdade(values.dataNascimento);
            if (idade >= 18) {
              
                values.responsavel = null;
            } else {
               
                const responsavel = {
                    nome: values['Nome do Responsavel'] || '',
                    sobrenome: values['Sobrenome do Responsavel'] || '',
                    dataNascimento: values['dataNascimento-responsavel'] || '',
                    cpf: values['CPF do Responsável'] || ''
                };
                if (!responsavel.nome || !responsavel.sobrenome || !responsavel.dataNascimento || !responsavel.cpf) {
                    alert('Por favor, preencha os dados do seu responsável.');
                    setSubmitting(false);
                    return;
                }
                values.responsavel = responsavel;
            }

            values.dataNascimento = new Date(values.dataNascimento).toLocaleDateString('pt-BR');
    
            const response = await api.post('/', JSON.stringify(values), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(response)
    
            setSubmitting(false);
    
            alert('Aluno cadastrado na Boxe Academy!');
        } catch (error) {
        
            alert('Erro ao cadastrar aluno: ' + error.response.data);
            setSubmitting(false);
        }
    };

      

   


    return (
        <Container>
            <h1>Cadastro</h1>
            <p>Para cadastrar um novo(a) aluno(a) preencha o formulário abaixo:</p>
            <p>Se for maior de idade preencha esse cadastro sem as informações do responsável, se for menor de idade, preencha também as do Responsável:</p>

            <ContainerBox>
                <Formik 
                    onSubmit={handleSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
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
                                    Cadastrar
                                </Button>
                            </Footer>
                        </Form>
                    )}
                </Formik>
            </ContainerBox>

            
        </Container>
    )
}

export default Register
