import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { device } from '../../../breakpoints';

export const Container = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
   
`;

export const Item = styled.div`
    margin-bottom: 8px;
    
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    font-size: 2rem;
    width: 100%;
    background: #EDE7CC;
    padding: 25px 40px;
    user-select: none;
    align-items: center;
    transition: all 0.5s;

    @media ${device.laptop} and (max-width: 1399px) {
        width: 90%; 
        font-size: 1.5rem;
        margin: 0 auto;
    };  

    @media ${device.tablet} and (max-width: 1023px) { 
        width: 80%;
        margin: 0 auto;
        font-size: 1.5rem;
    };  

    @media ${device.mobileM} and (max-width: 725px) { 
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 25px 25px;
    font-size: 2rem;

    img {
        margin-right: 50px;
    }
    };

    @media ${device.mobileS} and (max-width: 375px) { 
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 25px 25px;
    font-size: 2rem;

    img {
        margin-right: 50px;
    }

    };

    

    

    &:hover{
        background: #edec87;
    }
   
    img {
        width: 24px;
    }
`;

export const Body = styled.div`
    display: flex;
    background: #EDE7CC;
    width: 100%;
    height: auto;
    font-size: 1.8rem;
    align-items: center;
    padding: 25px 40px;
    box-shadow:  0px -2px 0px 0px rgba(0, 0, 0, 0.4);
    transition: max-height 0.5s cubic-bezier(0.5, 0, 0.1, 1);

    @media ${device.laptop} and (max-width: 1399px) {
        width: 90%; 
        font-size: 1.5rem;
    };  

    @media ${device.tablet} and (max-width: 1023px) { 
        width: 80%;
        margin: 0 auto;
        font-size: 1.5rem;
    };  

    @media ${device.mobileM} and (max-width: 725px) { 
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 10px 10px;
    font-size: 2rem;
    };

    @media ${device.mobileS} and (max-width: 375px) { 
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 10px 10px;
    font-size: 2rem;
    };

    
`;

export const Frame = styled.div`
    margin-bottom: 40px;
   
    
`;

export const Inner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    width: 850px;
    margin: auto;

    @media ${device.mobileM} and (max-width: 725px) { 
    width: 100%;
    font-size: 1.5rem;
    padding: 0%;
    margin: auto;
    };

    @media ${device.mobileS} and (max-width: 375px) { 
    width: 100%;
    margin: auto;
    padding: 0%;
    font-size: 2rem;
    };
  
`;

export const Title = styled.div`
    font-weight: 700;
    font-size: 3rem;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    text-align: center;
`;