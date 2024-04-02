# Boxe Academy - Controle de Alunos

## Deploy: https://cadastro-alunos-boxe-academy-anneb.vercel.app/

## Tecnologias utilizadas: 
React JS, styled-component, axios, formik, YUP, Hooks: UseState e useEffect, rotas (react-router-dom).

## Autenticação:
Utilizei o token fornecido via email no header das requisições, utilizei os 4 endpoints fornecidos para cadastrar, visualizar e editar (senti falta da rota Delete).

## Formulários:
Para os formulários de cadastros e edição utilizei Formik e Yup para as validações solicitadas.

## Competencias Tecnicas do desafio:
1. no Cadastro fiz as validações com Formik e Yup, assim como pedido, se o aluno for menor de idade é solicitado via alert que o mesmo cadastre os dados do respons'vel.
2. no Get (ver cadastros) coloquei apenas 5 dados de alunos no useEffect vindo de forma automática para tela, podendo ser ordenado ao clicar no botão "ordem alfabética" ou "alunos mais recentes", além de que, pode-se pesquisar os dados de determinado aluno digitando o CPF e clicando no botão "procurar".
3. Para Editar os dados o usario digita o CPF e os outros dados e assim ele pode alterar o cadastro do aluno, tendo um window como confirmaçao dessa ação "Tem certeza disso?" clicando em confirmar chamamos a função que faz o Patch conectado a api. 

## Deploy:
Para o deploy utilizei a Vercel.

## Considerações Finais:
Qualquer dúvida sobre o projeto podem entrar em contato. Fiquei muito feliz de realizar o desafio!:)


