import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/auth/AuthContex";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Container } from "./style";

export const InitialPage = () => {

    const navigate = useNavigate()

    const { handleLogin } = useContext(AuthContext)

    const [username, setUsername] = useState('')

    const handleOnClick = (event) => {
        event.preventDefault()
        handleLogin(username)
        
        navigate('/', { replace: true })
    }

    return (
      <Container>
        <form onSubmit={handleOnClick}>
            <div className="box-input">
                <TextField
                    required
                    id="outlined-required"
                    placeholder="Insira um nome"
                    fullWidth
                    className="textfield"
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>

            <div className="box-btn">
                <Button variant="contained" type="submit">
                    Buscar herois
                </Button>
            </div>
        </form>
      </Container>
    )
}