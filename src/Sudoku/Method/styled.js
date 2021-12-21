import styled from "styled-components";
import alpha from "color-alpha";

export const MethodBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-items: center;
    gap: 5px;
    width: 100%;
    min-height: 13vmin;
    background-color: ${({ theme }) => theme.colors.method.background};
    box-shadow: 0px 0px 15px 3px ${({ theme }) => alpha(theme.colors.global.shadow, 0.6)};
    border-radius: 10px;
    transition: 0.3s;
    border: 3px solid ${({ theme }) => theme.colors.method.border};
    padding: 10px;
    margin-bottom: 10px;

    &:hover {
        border-radius: 15px;
    }
`;

export const MethodText = styled.span`
    flex: 1;
    color: ${({ theme }) => theme.colors.method.text};
    font-size: 4vmin;
    text-align: center;
    cursor: default;
`