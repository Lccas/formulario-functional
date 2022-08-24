import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';

export default function FormularioCadastro() {

    //const submit = () => {
    //    console.log('ai que demais')
    //}

    let [nome, setNome] = useState("teste");
    let [sobrenome, setSobrenome] = useState("");
    let [cpf, setCpf] = useState("");
    //let promocoes = "";
    //let novidades = "";

    return(
        <form
            onSubmit={(event) => {
                event.preventDefault();
                console.log(nome, sobrenome, cpf)
            }} 
        >
            <TextField 
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                value={nome}
                id="nome"
                label="Nome"
                margin="normal"
                fullWidth
            />

            <TextField 
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                value={sobrenome}
                id="sobrenome" 
                label="Sobrenome" 
                margin="normal"
                fullWidth
            />

            <TextField 
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                value={cpf}
                id="cpf" 
                label="CPF"
                margin="normal"
                fullWidth
            />

            <FormControlLabel 
                label="Promoções" 
                control={<Switch name="promocoes" defaultChecked />}
            />

            <FormControlLabel 
                label="Novidades"
                control={<Switch name="novidades" defaultChecked />} 
            />

            <Button variant="text" type="submit">Text</Button>
        </form>
    )
}
