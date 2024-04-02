import styled from 'styled-components'

export const Container = styled.div`
z-index: 99;
position: fixed;
top: 0;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #8b0000;
padding: 0px;
width: 100%;

img {
    width: 90px;
}

`

export const Menu = styled.ul`
    display: flex;  
    list-style: none;
    gap: 50px;

`

export const Li = styled.li`
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;

    a {
        text-decoration: none;
        color: #fff;
    }
`