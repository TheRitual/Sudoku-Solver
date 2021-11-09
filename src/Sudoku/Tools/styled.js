import alpha from "color-alpha";
import styled from "styled-components";

export const ToolsBox = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    align-content: stretch;
    gap: 5px;
    width: 100%;
    min-height: 13vh;
    background-color: ${({ theme }) => theme.colors.diagram};
    box-shadow: 0px 0px 15px 3px ${({ theme }) => alpha(theme.colors.shadow, 0.6)};
    border-radius: 10px;
    transition: 0.3s;
    border: 3px solid ${({ theme }) => theme.colors.diagramBorder};
    padding: 10px;
    margin-bottom: 10px;

    &:hover {
        border-radius: 15px;
    }
`;

export const ToolsButton = styled.button`
    flex-grow: 1;
    margin: 0;
    border: 0;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.toolsButton};
    color: ${({ theme }) => theme.colors.toolsButtonText};
    transition: 0.2s;
    cursor: pointer;
    font-size: 19px;

    &:hover {
        transform: scale(1.1);
        filter: brightness(1.2);
    }
`