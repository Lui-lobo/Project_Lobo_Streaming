import React from "react";
import { FaqsContainer } from '../containers/faqs';
import { OptForm } from "../components";
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from '../containers/jumbotron';
import { ThemeProvider } from 'styled-components';
import { HeaderHome, Theme } from "../components/opt-form/styles/opt-form";



export default function Home() {
    return (
        <>
        <ThemeProvider theme={Theme}>
            <HeaderContainer>
                <ThemeProvider theme={HeaderHome}>
                    <OptForm>
                        <OptForm.input placeholder="Insira seu email" alt="Tente agora"></OptForm.input>
                        <OptForm.Button>Assine Já</OptForm.Button>
                        <OptForm.Text>Pronto para assistir ? entre com seu email e tenha acesso a horas de diversão</OptForm.Text>
                    </OptForm>
                </ThemeProvider>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer/>
        </ThemeProvider>
        </>
    )
}