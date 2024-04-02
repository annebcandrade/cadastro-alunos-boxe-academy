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

export const ContainerTwo = styled.div`
  display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;

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

export const ContainerThree = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0px;

    h1 {
        margin-top: 120px;
        color: #fff;
        font-size: 22;
    }

    h2 {
        margin-top: 120px;
        color: #fff;
        font-size: 20;
    }

    p{ 
        color: #fff;
    }




`


export const ListFive = styled.ul`
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
        margin-top: 12px;
        color: #fff;
        font-size: 22;
    }

`

export const Button = styled.button`
    background-color: #8b0000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 40px;
    width: 100px;
    border-radius: 10px;
    margin-top: 20px;

`

export const InputCpf = styled.input`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 300px;
    border-radius: 10px;
    margin-top: 20px;

`
