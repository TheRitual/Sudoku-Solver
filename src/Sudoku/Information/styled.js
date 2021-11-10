import alpha from "color-alpha";
import styled from "styled-components";

export const InformationBox = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.information.background};
    box-shadow: 0px 0px 15px 3px ${({ theme }) => alpha(theme.colors.global.shadow, 0.6)};
    border-radius: 10px;
    transition: 0.3s;
    border: 3px solid ${({ theme }) => theme.colors.information.border};
    padding: 2vh;
    margin-bottom: 10px;
    text-align: center;

    &:hover {
        border-radius: 15px;
    }
`;

export const InformationText = styled.span`
    color: ${({ theme }) => theme.colors.information.text};
    font-size: 24px;
    cursor: default;
`