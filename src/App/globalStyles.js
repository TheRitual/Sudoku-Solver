import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
        -webkit-font-smoothing: inherit;
    }

    body {
        background-color: ${({ theme }) => theme.colors.global.background};
        font-family: 'Irish Grover', cursive;
        padding-bottom: 40px;
    }

    button {
        font-family: 'Alfa Slab One', cursive;
    }

    a {
        text-decoration: none;
    }
`;