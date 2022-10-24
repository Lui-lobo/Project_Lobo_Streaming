import styled from 'styled-components/macro';
import { device } from '../../../breakpoints';

export const Item = styled.div`
    display: flex;
    padding: 15px 5%;
    overflow: hidden;
`

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction};
    justify-content: center;
    background: #EDE7CC;
    margin: auto;
    width: 100%;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    @media ${device.mobileS} and (max-width: 375px) { 
        display: flex;
        justify-content: center;
        flex-direction: column;
    };

    @media ${device.mobileM} and (max-width: 725px) { 
        display: flex;
        justify-content: center;
        flex-direction: column;
    };  

    @media ${device.tablet} and (max-width: 1023px) { 
        display: flex;
        justify-content: center;
    };  

    @media ${device.laptop} and (max-width: 1399px) { 
        display: flex;
        justify-content: center;
    };  

    @media ${device.laptopL} { 
        display: flex;
        justify-content: center;
    };  
`;

export const Pane = styled.div`
    width: 25%;
    margin: 2rem;

    @media ${device.mobileS} and (max-width: 375px) { 
        width: 100%;
        padding: 0 45px;
        text-align: center;
    };

    @media ${device.mobileM} and (max-width: 725px) { 
        width: 100%;
        padding: 0 45px;
        text-align: center;
    };

    @media ${device.tablet} and (max-width: 1023px) { 
        width: 100%;
        text-align: center;
    };

    @media ${device.laptop} and (max-width: 1399px) { 
        
        text-align: center;
    };

    @media ${device.laptopL} { 
        
        text-align: center;
    };
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: #A4499C;

    @media ${device.tablet} and (max-width: 1023px) { 
        font-size: 2rem;
    };  

    @media ${device.laptop} and (max-width: 1399px) { 
        font-size: 2rem;
    };  
`;

export const SubTitle = styled.h2`
    font-size: 1.7rem;
    color: #000;

    @media ${device.tablet} and (max-width: 1023px) { 
        font-size: 1.5rem;
    };  

    @media ${device.laptop} and (max-width: 1399px) { 
        font-size: 1.5rem;
    };  
`;

export const Image = styled.img`
   max-width: 100%;
   height: auto;

   @media ${device.mobileS} and (max-width: 375px) { 
    width: 100%;
    };

    @media ${device.mobileM} and (max-width: 725px) { 
    width: 80%;
    height: auto;
    };

    @media ${device.tablet} and (max-width: 1023px) { 
    width: auto;
    height: auto;
    };  

    @media ${device.laptopL} { 
    width: 70%;
    height: auto;
    }; 

;
`;

export const Container = styled.div``;
