import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderContainer } from "./style";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/auth/AuthContex";

export const Header = () => {

    const { userDetails, handleLogout } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogoutPage = () => {
        handleLogout()
        navigate('/', { replace: true })
    }

    return (
      <HeaderContainer>
        <div className="box-info">
          <Link to="/">Jornada do Herói</Link>
        </div>
        {userDetails && userDetails.username ? (
          <div>
            {userDetails.username}
            <button type="button" onClick={handleLogoutPage}>
              Sair
            </button>
          </div>
        ) : (
          ""
        )}
      </HeaderContainer>
    );
}