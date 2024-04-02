import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
    }

    input, textarea, select, button {
        font-family: inherit;
        border: none; 
        outline: none;
    }

    button {
        background-color: transparent;
        cursor: pointer;
    }
`;
