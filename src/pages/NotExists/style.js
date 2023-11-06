import styled from "styled-components";

export const Container = styled.div`

    margin: 75px 0;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .box-text {
        margin: 25px 0;
        color: ${props => props.theme.colors.white};
        font-weight: 700;        
    }
`