import styled from 'styled-components/macro';
import { device } from '../../../breakpoints';

export const Container = styled.div`
    display: flex;
    background: #E8E2D3;
    padding: 70px 56px;
    margin: 0 auto;
    margin-top: 110px;
    flex-direction: column;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    width: 1200px;
    margin: 0 auto;

    @media ${device.mobileS} and (max-width: 375px) {
        width: 100%;
    }

    @media ${device.mobileM} and (max-width: 725px) { 
        width: 100%;
    }; 

    @media ${device.tablet} and (max-width: 1199px) { 
        width: 100%;
    };  
`;

export const Link = styled.a`
    color: black;
    margin-bottom: 20px;
    font-size: 13px;
    text-decoration: none;
`

export const Title = styled.p`
    font-size: 1.5rem;
    color: black;
    font-weight: 700;
    margin-bottom: 20px;
    width: 1200px;
    margin: 0 auto;
`;

export const Text = styled.p`
    font-size: 1.1rem;
    color: #A4499C;
    font-weight: 600;
    margin-bottom: 30px;
`;

export const Break = styled.p`
    flex-basis: 100%;
    height: 0;
`;



