import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 15;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.white};

    padding: 15px 25px;
    

    .box-info {
        font-size: 26px;
        font-weight: 700;

        a {
            text-decoration: none;
            color: ${props => props.theme.colors.white};
        }
    }

    div {
        button {
            margin: 0 0 0 8px;
            color: ${props => props.theme.colors.white};
            background: none;
            border: none;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }
        }
    }
    
`
