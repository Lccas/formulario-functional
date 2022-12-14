import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant='h3' component="h1" align="center">Formulário de Cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarFormulario} validarCPF={validarCPF}/>
    </Container>
  );
}

function aoEnviarFormulario(dados){
  console.log(dados)
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido: false, texto: "CPF deve ter 11 digitos!"}
  } else {
    return {valido: true, texto: ""}
  }
}

export default App;
