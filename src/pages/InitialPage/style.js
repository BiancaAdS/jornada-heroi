import styled from "styled-components";

export const Container = styled.div`

    margin: 75px 0;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    form {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .box-input {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        width: 45%;
        margin: 5% 0 0;

        .textfield {
            input {
                color: ${props => props.theme.colors.white};
            }

            &:hover {
                fieldset {
                    border-color: white;
                }
            }

            &:focus-within {
                fieldset {
                    border-color: white;
                }
            }
        }
    }

    .box-btn {
        margin: 25px 0;

        button {
            color: ${props => props.theme.colors.white};
            background-color: ${props => props.theme.colors.darkBlue};

            &:hover {
                background-color: ${props => props.theme.colors.ligthBlue};
            }
        }
    }
`