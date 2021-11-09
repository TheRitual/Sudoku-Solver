import styled, { keyframes, css } from "styled-components";
import alpha from "color-alpha";

const conflictAnimationRow = (props) => keyframes`
    0% {
        box-shadow: inset 0px 0px 20px 20px ${props.theme.colors.buttonConflict}};
    }
    80% {
        box-shadow: inset 0px 0px 10px 10px ${props.theme.colors.buttonConflict}};
    }
    100% {
        box-shadow: inset 0px 0px 0 0 ${props.theme.colors.buttonConflict}};
    }
`;

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
    margin-bottom: 30px;

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
    margin: 0;
    border: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.button};
    outline: none;
    transition: 0.05s;
    font-size: 25px;
    color: ${({ theme }) => theme.colors.diagramNumber};
    text-shadow: 0px 0px 15px ${({ theme }) => theme.colors.diagramNumberShadow};

    ${({ y, activeY, theme }) => y === activeY && "background-color:" + theme.colors.buttonLineHover + ";"}
    ${({ x, activeX, theme }) => x === activeX && "background-color:" + theme.colors.buttonLineHover + ";"}
    ${({ x, y, activeX, activeY, theme }) => {
        if (y === activeY && x === activeX) {
            return `
            background-color: ${theme.colors.buttonHover};
            cursor: pointer;
            border-radius: 10px;
            transform: scale(1.2);`
        }
        return "";
    }};

    ${({ y, conflictRow }) => y === conflictRow && css`animation: 1s ${conflictAnimationRow};`}
    ${({ x, conflictCol }) => x === conflictCol && css`animation: 1s ${conflictAnimationRow};`}

    &:focus {
        box-shadow: 0px 0px 10px 3px ${({ theme }) => theme.colors.focus};
    }
`;