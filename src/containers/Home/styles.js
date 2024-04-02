import styled from 'styled-components'
import ImageBack from '../../assets/background.webp'
import Woman from '../../assets/woman.jpeg'

export const Background = styled.div`
    background-image: url(${ImageBack});
    height: 100vh;
    width: 100;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;


    &::before {
        content: '' ;
        position: absolute;
        top: 0;
        left: 0;
        width:  100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

`
export const Info = styled.div`
z-index: 2;
padding: 20px;
width: 50%;
    h1 {
        font-size: 60px;
        font-weight: 700;
        color: #fff;
    }

    p {
        font-size: 20px;
        font-weight: 500;
        color: #fff;
        margin-top: 30px;
        margin-bottom: 20px;
    }


`

export const Poster = styled.div`
 z-index: 3;
    img {
        background-image: url(${Woman});
        width: 200px;
        height: 200px;
        border-radius: 30px;
       border: none;
    }




`

