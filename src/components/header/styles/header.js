import styled from 'styled-components/macro';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => src ? `../images/misc/${src}.jpg` : '../images/misc/bidasflix.webp'}) top left / cover no-repeat;
    width: 100%;
    height: 750px;
    margin-bottom: 25px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    border-bottom: 8px solid #040404;
`;

export const Frame = styled.div`

`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0px;
    align-items: center;

    a{
        display: flex;
    }

`;

export const Logo = styled.img`
    height: 150px;
    width: 150px;
    margin-right: 40px;
    margin-top: 20px;

    border-radius: 100%;
`;

export const Button = styled.button`
    display: block;
    background: #e3cc98;
    width: 89px;
    height: fit-content;
    color: #040404;
    border: 0;
    font-size: 1rem;
    border-radius: 5px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    transition: all 300ms ease;

    &:hover {
        background: #e3c999;
    }
`;