import React from 'react';
import Button from '@mui/material/Button';

export default function FormularioCadastro() {

    const submit = () => {
        console.log('ai que demais')
    }

    return(
        <form>
            <label>Nome</label>
            <input type="text"/>

            <label>Sobrenome</label>
            <input type="text"/>

            <label>CPF</label>
            <input type="text"/>

            <label>Promoções</label>
            <input type="checkbox"/>

            <label>Deseja receber novidades?</label>
            <input type="checkbox"/>

            <Button variant="text">Text</Button>
        </form>
    )
}
