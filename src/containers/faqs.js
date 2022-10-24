import React from 'react';
import { Accordion } from '../components';
import OptForm  from '../components/opt-form';
import faqsData from '../fixtures/faqs.json';




export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Questões mais perguntadas</Accordion.Title>
            {faqsData.map(item => 
            <Accordion.Item key={item.id}>
                <Accordion.Header>
                    {item.header}
                </Accordion.Header>
                <Accordion.Body>
                    {item.body}
                </Accordion.Body>
            </Accordion.Item>
            )}
            <Accordion.Item>

            </Accordion.Item>

            <OptForm>
                <OptForm.input placeholder="Insira seu email" alt="Tente agora"></OptForm.input>
                <OptForm.Button>Tente Agora</OptForm.Button>
                <OptForm.Text>Pronto para assistir ? entre com seu email e tenha acesso a horas de diversão</OptForm.Text>
            </OptForm>

        </Accordion>
    )
}