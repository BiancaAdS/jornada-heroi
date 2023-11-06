import styled from "styled-components";

export const Container = styled.div`

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    background-color: ${props => props.theme.colors.backgroundColorModal};
    border: 2px solid #000;
    padding: 4px;
    border-radius: 8px;
    
    color: ${props => props.theme.colors.white};

    .box-powerstats {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 0 8px;

        span {
            display: flex;
            align-items: center;
            justify-content: center;

            padding: 0 14px;
        }
    }

    .addIcon {
        color: green;
    }

    .removeIcon {
        color: red;
    }
    
`