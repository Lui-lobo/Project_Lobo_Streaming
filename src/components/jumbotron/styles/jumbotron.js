import styled from 'styled-components/macro';
import { device } from '../../../breakpoints'

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
    margin: auto;
    width: 100%;

    @media ${device.mobileS} and (max-width: 375px) { 
        display: flex;
        background: red;
        justify-content: center;
        flex-direction: column;
    };
`
