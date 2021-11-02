import styled from "styled-components";
import alpha from "color-alpha";

export const NumbersGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    align-content: stretch;
    justify-content: stretch;
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

export const NumberField = styled.button`
    margin: 3px;
    border: 0;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.numberBackground};
    outline: none;
    transition: 0.05s;
`;

export const Number = styled.span`
    font-size: 25px;
    color: ${({ theme }) => theme.colors.number};
`;

export const Amount = styled.span`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.amount};
    vertical-align: top;
    
`;