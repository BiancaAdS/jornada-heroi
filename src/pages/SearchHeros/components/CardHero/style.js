import styled from "styled-components";

export const Container = styled.div`
    color: red;

    div button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
            width: 80%;
            border-radius: 0 0 8px 8px;
        }
    }

    .text-options {
        text-transform: uppercase;
        color: white;
        font-weight: 700;

        div {
            font-size: ${props => props.theme.fontSizes.medium};
        }
    }

    
    .box-cardRed {
        background-color: ${props => props.theme.colors.red};
    }

    .box-cardGreen {
        background-color: ${props => props.theme.colors.green};
    }

    .box-cardBlue {
        background-color: ${props => props.theme.colors.darkBlue};
    }

    .box-cardOrange {
        background-color: ${props => props.theme.colors.orange};
    }

    .cardSelected {
        filter: brightness(0.50) opacity(0.95);
    }

`