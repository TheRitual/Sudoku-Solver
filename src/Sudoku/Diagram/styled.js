import styled from "styled-components";
import alpha from "color-alpha";

export const Grid = styled.div`
    display: grid;
    width: 100%;
    height: 85vh;
    background-color: ${({ theme }) => theme.colors.diagram};
    box-shadow: 0px 0px 15px 3px ${({ theme }) => alpha(theme.colors.shadow, 0.6)};
    border-radius: 10px;
    transition: 0.3s;
    border: 1px solid ${({ theme }) => theme.colors.diagramBorder};

    &:hover {
        border-radius: 20px;
    }
`;