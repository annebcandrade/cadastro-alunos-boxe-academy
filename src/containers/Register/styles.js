import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin-top: 120px;
        color: #fff;
        font-size: 22;
    }

    p{ 
        margin-top: 20px;
        color: #fff;
    }

`

export const ContainerBox = styled.div`
   width: 80%;
   max-width: 600px;
   display: flex;
   justify-content: center;
   box-shadow: 0 1px 2px;
   padding:  30px 0;
   background-color: white;
`

export const Row = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 550px) {
        display: block;
    }
`

export const Footer = styled.div`
    text-align: end;

`

export const Button = styled.button`
    padding: 8px;
    font-size: 20px;
    cursor: pointer;
    background-color: #8b0000;
    color: white;
    border: none;
    border-radius: 5px;
`

export const ButtonCad = styled.div`
 padding: 8px;
    font-size: 20px;
    cursor: pointer;
    background-color: #8b0000;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 20px;


        `