import React from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';

export default function FormularioCadastro() {

    const submit = () => {
        console.log('ai que demais')
    }

    return(
        <form>
            <TextField id="nome" label="Nome" margin="normal" fullWidth/>

            <TextField id="sobrenome" label="Sobrenome" margin="normal" fullWidth/>

            <TextField id="cpf" label="CPF" margin="normal" fullWidth/>

            <FormControlLabel label="Promoções" control={<Switch name="promocoes" defaultChecked />} />
            <FormControlLabel label="Novidades" control={<Switch name="novidades" defaultChecked />} />

            <Button variant="text">Text</Button>
        </form>
    )
}
