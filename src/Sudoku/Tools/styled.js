import alpha from "color-alpha";
import styled, { css } from "styled-components";

export const ToolsBox = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    align-content: stretch;
    gap: 5px;
    width: 100%;
    min-height: 13vmin;
    background-color: ${({ theme }) => theme.colors.tools.background};
    box-shadow: 0px 0px 15px 3px ${({ theme }) => alpha(theme.colors.global.shadow, 0.6)};
    border-radius: 10px;
    transition: 0.3s;
    border: 3px solid ${({ theme }) => theme.colors.tools.border};
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
    background-color: ${({ theme }) => theme.colors.tools.buttons.background};
    color: ${({ theme }) => theme.colors.tools.buttons.text};
    transition: 0.2s;
    cursor: pointer;
    font-size: 3vmin;

    ${({ theme, highlight }) => highlight && css`
        background-color: ${theme.colors.tools.buttons.highlightBackground};
        color: ${theme.colors.tools.buttons.highlightText};
    `};

    ${({ theme, isActive }) => isActive && css`
        background-color: ${theme.colors.tools.buttons.activeBackground};
        color: ${theme.colors.tools.buttons.activeText};
    `};

    &:hover {
        transform: scale(1.03);
        filter: brightness(1.2);
    }
`