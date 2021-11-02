import styled from "styled-components";
import alpha from "color-alpha";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(9, 1fr);
    grid-auto-flow: column;
    width: 100%;
    height: 95vh;
    background-color: ${({ theme }) => theme.colors.diagram};
    box-shadow: 0px 0px 15px 3px ${({ theme }) => alpha(theme.colors.shadow, 0.6)};
    border-radius: 10px;
    transition: 0.3s;
    border: 3px solid ${({ theme }) => theme.colors.diagramBorder};
    padding: 20px;

    &:hover {
        border-radius: 15px;
    }
`;

export const Field = styled.div`
    background-color: ${({ theme }) => theme.colors.field};
    border: dashed 1px ${({ theme }) => theme.colors.fieldBorder};
    margin: 0px;
    padding: 2px;
    ${({ x, theme }) => x % 3 === 2 && "border-right: solid 2px " + theme.colors.fieldBorderGroup + ";"}
    ${({ x, theme }) => x % 3 === 0 && "border-left: solid 2px " + theme.colors.fieldBorderGroup + ";"}
    ${({ y, theme }) => y % 3 === 2 && "border-bottom: solid 2px " + theme.colors.fieldBorderGroup + ";"}
    ${({ y, theme }) => y % 3 === 0 && "border-top: solid 2px " + theme.colors.fieldBorderGroup + ";"}
    ${({ y }) => y === 0 && "border-top: 0;"}
    ${({ y }) => y === 8 && "border-bottom: 0;"}
    ${({ x }) => x === 0 && "border-left: 0;"}
    ${({ x }) => x === 8 && "border-right: 0;"}
`;

export const FieldButton = styled.button`
    width: 100%;
    height: 100%;
    margin: 0;
    border: 0;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.button};

    ${({ y, activeY, theme }) => y === activeY && "background-color:" + theme.colors.buttonLineHover + ";"}
    ${({ x, activeX, theme }) => x === activeX && "background-color:" + theme.colors.buttonLineHover + ";"}

    &:hover {
        background-color: ${({ theme }) => theme.colors.buttonHover};
        cursor: pointer;
        border-radius: 10px;
        transform: scale(1.2);
    }
`;