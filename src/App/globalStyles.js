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
        background-color: ${({ theme }) => theme.colors.bodyBackground};
        font-family: 'Irish Grover', cursive;
    }

    button {
        font-family: 'Alfa Slab One', cursive;
    }

    a {
        text-decoration: none;
    }
`;