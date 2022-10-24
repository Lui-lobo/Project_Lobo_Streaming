import styled from 'styled-components/macro';
import { device } from '../../../breakpoints';

export const Theme = {
    colorbg: {
        background: '#ede7cc',
        backgroundHover: '#edec87',
    },

    container: {
       
    }
}

export const HeaderHome = {
    colorbg: {
        background: '#b4ede9',
        backgroundHover: '#a999e9',
    },

    container: {
        width: '90%',
    }
}

export const Container = styled.div`
    display: flex;
    max-width: fit-content;
    width: ${props => props.theme.container.width};
    justify-content: center;
    height: 10%;
    flex-wrap: wrap;
    margin-top: 20px;
    margin: 0 auto;
`;

export const Input = styled.input`
    max-width: 450px;
    width: 100%;
    border: none;
    padding: 10px;
    height: 70px;
    box-sizing: border-box;

    @media ${device.tablet} and (max-width: 900px) { 
        width: 100%;
        max-width: 600px;
        height: 60px;
    };   

    @media ${device.mobileM} and (max-width: 725px) { 
        width: 100%;
        max-width: 600px;
        height: 70px;
    }; 

    @media ${device.mobileS} and (max-width: 375px) { 
        width: 100%;
        max-width: 600px;
        height: 70px;
    }; 
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    height: 70px;
    background: ${props => props.theme.colorbg.background};
    color: black;
    border: none;
    text-transform: uppercase;
    padding: 0 32px;
    font-size: 1.5rem;
    transition: 0.5s;
    cursor: pointer;

    img {
        width: 30px;
        margin: 0 10px;
    }

    &:hover {
        background: ${props => props.theme.colorbg.backgroundHover};
    }

    @media ${device.tablet} and (max-width: 900px) { 
        height: 60px;
        margin-top: 25px;
        font-size: 1.2rem;
    }; 

    @media ${device.mobileM} and (max-width: 725px) { 
        height: 60px;
        margin-top: 25px;
        font-size: 1.2rem;
    }; 

    @media ${device.mobileS} and (max-width: 375px) { 
        height: 60px;
        margin-top: 25px;
        font-size: 1.2rem;
    }; 
    
`;

export const Text = styled.p`
    font-size: 1.1rem;

    @media ${device.tablet} and (max-width: 900px) { 
        height: 60px;
        margin-top: 25px;
    }; 
`;