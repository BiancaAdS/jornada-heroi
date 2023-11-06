import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;

    margin: 75px 0;
    
    .autocomplete-input {
        border: 1px solid ${props => props.theme.colors.borderColor};
        
        div, svg {
            color: ${props => props.theme.colors.white};
            font-weight: 700;
        }
        
        fieldset {
            border: none;
        }
    }

    .box-filter{
        padding: 15px 0;
        width: 75%;
    }

    .box-list {
        padding: 15px 0;
        width: 75%;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const ListboxComponent = styled.ul`
    background-color: ${props => props.theme.colors.backgroundColor};
    border:1px solid ${props => props.theme.colors.borderColor};
    
`

export const ListItemComponent = styled.li`

    &:only-child, :last-child{
        border-bottom: none;
    }
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    color: ${props => props.theme.colors.white};
    
    
`
