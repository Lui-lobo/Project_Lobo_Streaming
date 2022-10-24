import React from "react";
import Header from "../components/header";
import * as ROUTES from "../constants/routes";
import  logo  from "../Logo.svg";

export function HeaderContainer ({children}) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="BidasFlix" src={logo}/>
                <Header.Button to={ROUTES.SIGN_IN} alt="Faça sua assinatura Aqui!" >Entrar</Header.Button>
            </Header.Frame>
            { children }
        </Header>
    )
}