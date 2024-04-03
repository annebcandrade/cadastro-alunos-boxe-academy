import { Button, Container, ContainerThree, ContainerTwo, InputCpf, ListFive } from "./styles"
import { useEffect, useState } from "react";
import axios from "axios";
import api from '../../services/api'

function ViewRegister() {

    const [alunos, setAlunos] = useState([]);
    const [ordenado, setOrdenado] = useState(false);
    const [cpf, setCpf] = useState('');
    const [aluno, setAluno] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        async function fetchAlunos() {
            try {
                const response = await api.get('/');
                const alunosOrdenados = response.data.retorno.sort((a, b) => (a.nome > b.nome) ? 1 : -1);

                const primeirosCincoAlunos = alunosOrdenados.slice(0, 5);
                setAlunos(primeirosCincoAlunos);
            } catch (error) {
                console.error('Erro ao obter os alunos:', error);
            }
        }

        fetchAlunos();
    }, []);

    const handleOrdenarAlunos = () => {
        if (!ordenado) {
            const alunosOrdenados = [...alunos].sort((a, b) => (a.nome > b.nome) ? 1 : -1);
            setAlunos(alunosOrdenados);
        } else {
            const alunosDesordenados = [...alunos].sort((a, b) => (a.nome > b.nome) ? -1 : 1);
            setAlunos(alunosDesordenados);
        }
        setOrdenado(!ordenado);
    };

    const handleBuscarAluno = async () => {
        try {
            const response = await api.get(`/${cpf}`);
            if (response.status === 200) {
                const alunoData = response.data.retorno;
                setErrorMessage('Aluno Cadastrado na Boxe Academy. Confira os dados cadastrados logo abaixo: ')
               
                if (alunoData) {
                  setAluno(alunoData); 
                } else {
                  setAluno(null);
                  setErrorMessage('Aluno não cadastrado na Boxe Academy');
                }
              } else {
                setAluno(null);
                setErrorMessage('Aluno não cadastrado na Boxe Axademy. Por favor, tente novamente.');
              }
            } catch (error) {
              console.error('Aluno não cadastrado na Boxe Axademy.', error);
              setAluno(null);
              setErrorMessage('Aluno não cadastrado na Boxe Axademy. Por favor, tente novamente.');
            }
          };

    return (
        <Container>
            <h1>Ver Cadastros</h1>
            <p>Confira a lista de alunos cadastrados na Boxe Academy em Ordem de
                inscrição:</p>

            <Button onClick={handleOrdenarAlunos}>{ordenado ? 'Alunos mais Recenter' : 'Ordem Alfabética'}</Button>


            <Container>
                <ListFive>
                    {alunos.map((aluno) => (
                        <li key={aluno.cpf}>Nome: {aluno.nome} {aluno.sobrenome} | CPf: {aluno.cpf}</li>
                    ))}
                </ListFive>
            </Container>

            <h1>Para procurar os dados de um aluno digite o CPF:</h1>

            <ContainerTwo>
                <InputCpf value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    placeholder="Digite o cpf do aluno" />
                <Button onClick={handleBuscarAluno}>Procurar</Button>
            </ContainerTwo>

            {errorMessage && <p>{errorMessage}</p>}
      {aluno && (
        <ContainerThree>
          <h2>Dados do Aluno</h2>
          <p>Nome: {aluno.nome}</p>
          <p>Sobrenome: {aluno.sobrenome}</p>
          <p>Data de Nascimento: {aluno.dataNascimento}</p>
          <p>CPF: {aluno.cpf}</p>
          <p>Cidade: {aluno.Cidade}</p>
          <p>Logradouro: {aluno.Logradouro}</p>
          <p>Bairro: {aluno.Bairro}</p>
          <p>UF: {aluno.Uf}</p>
          <p>Email: {aluno.Email}</p>
          <p>Peso: {aluno.Peso}</p>
          <p>Altura: {aluno.Altura}</p>
          <p>Complemento: {aluno.Complemento}</p>
          <p>Número: {aluno.Numero}</p>
        </ContainerThree>
      )}



        </Container>
    )
}

export default ViewRegister
