import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';

export default function FormularioCadastro({aoEnviar, validarCPF}) {

    let [nome, setNome] = useState("");
    let [sobrenome, setSobrenome] = useState("");
    let [cpf, setCpf] = useState("");
    let [promocoes ,setPromocoes] = useState(true);
    let [novidades ,setNovidades] = useState(false);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}})

    return(
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
                //console.log(nome, sobrenome, cpf, promocoes, novidades)
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
                onBlur={(event)=>{
                    const ehValido = validarCPF(cpf);
                    setErros({cpf:ehValido});
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                value={cpf}
                id="cpf" 
                label="CPF"
                margin="normal"
                fullWidth
            />

            <FormControlLabel 
                label="Promoções" 
                control={<Switch 
                    name="promocoes"
                    checked={promocoes}
                    onChange={(event)=>{
                        setPromocoes(event.target.checked)
                    }}
                    //defaultChecked={promocoes}
                />}
            />

            <FormControlLabel 
                label="Novidades"
                control={<Switch 
                    name="novidades" 
                    checked={novidades}
                    onChange={(event)=>{
                        setNovidades(event.target.checked)
                    }}
                    //defaultChecked={novidades} 
                />} 
            />

            <Button variant="text" type="submit">
                Text
            </Button>
        </form>
    )
}
