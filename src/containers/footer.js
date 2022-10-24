import React from "react";
import { Footer } from '../components';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Informações Uteis: </Footer.Title>
            <Footer.Break/>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Text>Quem Somos ?</Footer.Text>
                    <Footer.Link href="#">Perguntas Frequentes</Footer.Link> 
                    <Footer.Link href="#">Nosso Objetivo</Footer.Link> 
                    <Footer.Link href="#">Termos e Condições de uso</Footer.Link> 
                </Footer.Column>

                <Footer.Column>
                    <Footer.Text>BidasFlix</Footer.Text>
                    <Footer.Link href="#">Planos</Footer.Link>
                    <Footer.Link href="#">Promoções</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Text>Suporte</Footer.Text>
                    <Footer.Link href="#">Como Acessar o serviço</Footer.Link>
                    <Footer.Link href="#">Centro de Ajuda</Footer.Link>
                    <Footer.Link href="#">Comunidade e suporte</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Text>Para Celular</Footer.Text>
                    <Footer.Link href="#">Aplicativo para Android</Footer.Link>
                    <Footer.Link href="#">Aplicativo para IOS</Footer.Link>
                </Footer.Column>

            </Footer.Row>
            
            <Footer.Break></Footer.Break>

            <Footer.Row>
                <p><small>Todos os Direitos Reservados / 2022</small></p>
            </Footer.Row>

        </Footer>
    )
}