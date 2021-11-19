import styled from "styled-components";
import alpha from "color-alpha";

export const NumbersGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    align-content: stretch;
    justify-content: stretch;
    width: 100%;
    min-height: 13vmin;
    background-color: ${({ theme }) => theme.colors.numbers.background};
    box-shadow: 0px 0px 15px 3px ${({ theme }) => alpha(theme.colors.global.shadow, 0.6)};
    border-radius: 10px;
    transition: 0.3s;
    border: 3px solid ${({ theme }) => theme.colors.numbers.border};
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
    background-color: ${({ theme }) => theme.colors.numbers.field.background};
    ${({ theme, isActive }) => isActive && "background-color:" + theme.colors.numbers.field.activeBackground + ";"};
    outline: none;
    transition: 0.2s;
    cursor: pointer;

    &:focus {
        box-shadow:
        0px 0px 20px 5px ${({ theme }) => theme.colors.numbers.field.focusedShadow},
        0px 0px 10px 3px ${({ theme }) => theme.colors.numbers.field.focusedShadow};
    }
`;

export const Number = styled.span`
    font-size: 4vmin;
    color: ${({ theme }) => theme.colors.numbers.field.text};
`;

export const Amount = styled.span`
    font-size: 2vmin;
    color: ${({ theme }) => theme.colors.numbers.field.subText};
    vertical-align: top;
    
`;