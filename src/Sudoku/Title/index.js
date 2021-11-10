import styled from "styled-components";

const Title = styled.h1`
    color:  ${({ theme }) => theme.colors.global.title};
    font-size:  48px;
    text-align: center;
    width: 100%;
    text-shadow: 0px 0px 15px ${({ theme }) => theme.colors.global.shadow};
`;

export default Title;