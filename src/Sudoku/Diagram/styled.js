import styled, { css } from "styled-components";
import alpha from "color-alpha";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(9, 1fr);
    grid-auto-flow: column;
    width: 100%;
    height: 80vmin;
    background-color: ${({ theme }) => theme.colors.diagram.background};
    box-shadow: 0px 0px 15px 3px ${({ theme }) => alpha(theme.colors.global.shadow, 0.6)};
    border-radius: 10px;
    transition: 0.3s;
    border: 3px solid ${({ theme }) => theme.colors.diagram.border};
    padding: 20px;
    margin-bottom: 30px;
    cursor: cell;

    &:hover {
        border-radius: 15px;
    }
`;

export const Field = styled.div`
    background-color: ${({ theme }) => theme.colors.diagram.field.background};
    border: dashed 1px ${({ theme }) => theme.colors.diagram.field.border};
    margin: 0px;
    padding: 2px;
    cursor: cell;
    ${({ x, theme }) => x % 3 === 2 && "border-right: solid 2px " + theme.colors.diagram.groupBorder + ";"}
    ${({ x, theme }) => x % 3 === 0 && "border-left: solid 2px " + theme.colors.diagram.groupBorder + ";"}
    ${({ y, theme }) => y % 3 === 2 && "border-bottom: solid 2px " + theme.colors.diagram.groupBorder + ";"}
    ${({ y, theme }) => y % 3 === 0 && "border-top: solid 2px " + theme.colors.diagram.groupBorder + ";"}
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
    background-color: ${({ theme }) => theme.colors.diagram.field.button.background};
    outline: none;
    transition: 0.2s;
    font-size: 4vmin;
    color: ${({ theme }) => theme.colors.diagram.customNumber};
    text-shadow: 0px 0px 15px ${({ theme }) => theme.colors.diagram.field.button.numberShadow};
    cursor: cell;

    ${({ clickedRow, isSolving, theme }) => clickedRow && !isSolving && css`background-color: ${theme.colors.diagram.field.button.cross};`};
    ${({ clickedCol, isSolving, theme }) => clickedCol && !isSolving && css`background-color: ${theme.colors.diagram.field.button.cross};`};
    ${({ isActive, numberMatch, isSolving, theme }) => {
        return isActive && !isSolving && css`
            background-color: ${theme.colors.diagram.field.button.activeBackground};
            border-radius: 10px;
            transform: scale(1.2);
            font-size: 0px;
            &::before {
                font-size: 4vmin;
                content: "${({ activeNumber }) => activeNumber === 0 ? '⛒' : activeNumber}";
                ${numberMatch ?
                css`color: ${({ theme }) => theme.colors.diagram.field.button.activeMatchingText};`
                :
                css`color: ${({ theme }) => theme.colors.diagram.field.button.activeText};`
            };
            }`
    }
    };

    ${({ isLastClicked, isSolving, theme }) => isLastClicked && !isSolving && css`border: 3px groove ${alpha(theme.colors.diagram.field.button.lastClicked, 0.3)};`}

    ${({ isGiven }) => isGiven && css`
            color: ${({ theme }) => theme.colors.diagram.givenNumber};
            background-color: ${({ theme }) => theme.colors.diagram.givenBackground};
        `
    }

    ${({ isConflict, isSolving, theme }) => isConflict && !isSolving && css`
        color: ${theme.colors.diagram.field.button.conflictText};
        text-shadow:    -1px -1px 0 ${theme.colors.diagram.field.button.conflictOutline},
                        1px -1px 0 ${theme.colors.diagram.field.button.conflictOutline},
                        -1px 1px 0 ${theme.colors.diagram.field.button.conflictOutline},
                        1px 1px 0 ${theme.colors.diagram.field.button.conflictOutline};
        background-color: ${alpha(theme.colors.diagram.field.button.conflictBackground, 0.5)};
    `}

    ${({ isSolving, theme }) => css`
        &:focus {
            box-shadow: 0px 0px 10px 3px ${isSolving ? "transparent" : theme.colors.diagram.field.button.focusedShadow};
        }
    `}

    
`;