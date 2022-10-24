import styled from 'styled-components/macro';

const size = {
    mobileS: '1px',
    mobileM: '376px',
    mobileL: '425px',
    tablet: '726px',
    laptop: '1024px',
    laptopL: '1400px',
    desktop: '2560px'
};

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};