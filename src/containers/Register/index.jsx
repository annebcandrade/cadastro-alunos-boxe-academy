import { Button, Container, ContainerBox, Footer, Row, ButtonCad } from "./styles";
import { Input } from "../../components/Input";
import * as Yup from 'yup';
import styled from "styled-components";
import { Form, Formik } from "formik";

function Register() {


    
     

    const initialValues = {
        responsavel: null,
        nome: "",
        sobrenome: "",
        dataNascimento: "",
        CPF: "",
        Peso: "",
        Altura: "",
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
        CPF: Yup.string()  .max(11, "O Campo deve ter no máximo 11 caracteres") .required("Campo obrigatório"),
        Peso: Yup.string().required("Campo obrigatório"),
        Altura: Yup.string().required("Campo obrigatório"),
        Logradouro: Yup.string().required("Campo obrigatório"),
        Número: Yup.string().required("Campo obrigatório"),
        Bairro: Yup.string().required("Campo obrigatório"),
        CEP: Yup.string().required("Campo obrigatório"),
        Cidade: Yup.string().required("Campo obrigatório"),
        UF: Yup.string().required("Campo obrigatório"),
    });


    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      };



   


    return (
        <Container>
            <h1>Cadastro</h1>
            <p>Para cadastrar um novo(a) aluno(a) preencha o formulário abaixo:</p>
            <p>Se for maior de idade preencha apenas esse cadastro:</p>

            <ContainerBox>
                <Formik onSubmit={null}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
                    {({ values, isSubmiting }) => (
                        <Form style={{ width: "90%" }}>
                            <Row>
                                <Input name="nome" required />
                                <Input name="sobrenome" required />
                            </Row>
                            <Row>
                                <Input
                                    name="dataNascimento"
                                    type="date"
                                    label="Data de Nascimento"
                                    required
                                />
                                <Input name="CPF"
                                    type="number"
                                    label="CPF"
                                    required />
                            </Row>
                            <Row>
                                <Input name="Peso"
                                    type="number"
                                    label="Peso"
                                    required />
                                <Input name="Altura"
                                    type="number"
                                    label="Altura"
                                    required />
                            </Row>

                            <Row>
                                <Input name="Logradouro" required />
                                <Input name="Cidade" disabled={!values.Logradouro} required />
                                <Input name="UF" required />
                            </Row>

                            <Row>
                                <Input name="Número" type="number" required />
                                <Input name="Complemento" />
                            </Row>

                            <Row>
                                <Input name="CEP" type="number" required />
                                <Input name="Bairro" required />
                            </Row>

                            <Row>
                                <Input name="Email" type="email" required />
                                <Input name="Telefone" type="number" required />
                            </Row>

                        


                            <Footer>
                                <Button type="submit" disabled={isSubmiting}>
                                    Salvar
                                </Button>
                            </Footer>
                        </Form>
                    )}
                </Formik>
            </ContainerBox>

            <p>Se for menor de idade preencha os dados do Seu responsável:</p>


            <ContainerBox>
                <Formik onSubmit={handleSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
                    {({ values, isSubmitting }) => (
                        <Form style={{ width: "90%" }}>
                            <Row>
                                <Input name="nome" required />
                                <Input name="sobrenome" required />
                            </Row>
                            <Row>
                                <Input
                                    name="dataNascimento"
                                    type="date"
                                    label="Data de Nascimento"
                                    required
                                />
                                <Input name="CPF"
                                    type="number"
                                    label="CPF"
                                    required />
                            </Row>
                            <Footer>
                                <Button type="submit" disabled={isSubmitting} >
                                    Salvar
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