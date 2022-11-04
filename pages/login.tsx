import React, {useState, useEffect, FormEvent} from 'react'
import { Typography, Container, CssBaseline, Box, TextField, FormControl, Button, Stack
, FormControlLabel, Checkbox } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../components/utils/Copyright';
import Snackbar from '../components/utils/Snackbar';
import axios from 'axios';



const theme = createTheme();

export default function LoginPage() {


const [name, setName] = useState('');
const [contador, setContador] = useState<number | undefined>(0);
const [error, setError] = useState<boolean>(false);
const [errorMessage, setErrorMessage] = useState<string>('');
const [email, setEmail] = useState<string | undefined | null | FormDataEntryValue>('');
const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
const [open, setOpen] = useState<boolean>(false);


// A primeira vez após carrergar a página e após o render
// Executa também a cada alteração de estado
useEffect(() => {
    if(contador == 0){
        document.title = `Executando useEffect a primeira vez ${contador}`;
    } else {
        document.title = `Executando useEffect a cada alteração ${contador}`;
    }
    //setContador(contador + 1);
 //   console.log(`Executando useEffect a cada chamada ${contador}`);
}, [contador]);
   //setContador(contador + 1);
 useEffect(() => {
        if(name.length > 0){
            console.log (`Executando useEffect para Maiúsculo ${name}`);
        } 
    }, [name]); 



useEffect(() => {
    if(password && password.length < 6){
       setError(true);
       setErrorMessage('A senha deve ter no mínimo 6 caracteres');
    }else if(password){
        setError(false);
        setErrorMessage('');

        //enviar o formulário para o servidor
        //deu certo... vamos criar o snackbar...
        
      // setOpen(true);

      axios.post('http://localhost:3000/auth/login', {
        login: email,
        password
    }).then((response) => {
        console.log(response);
        if(response.status == 200){
            setOpen(true);
        }
    }).catch((error) => {
        console.log(error);
    })
}
},[password]);


  // Essa função executa quando envia o formulário 
const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
// Previne o comportamento padrão do formulário, que seria recarregar a página.
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log(data.get('email'));
    console.log(data.get('password'));

    setEmail(data.get('email'));
    setPassword(data.get('password'));
}

    return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
     
            <Box sx={{mt:8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                 {/*<button onClick={(e)=>setContador(contador+1)}>Muda o Contador</button>
                 <button onClick={() => setName("Juliana Cruz")}>Mudar o nome</button> 

                    {`O state name é: ${name.toUpperCase()}`} 
                  
                    {'O State contador vale: ' + contador}*/}

<TextField margin="normal" required fullWidth id="email" label="Digiete o e-mail" name="email" autoComplete="email" autoFocus />  
<TextField margin="normal" required fullWidth id="password" label="Digite a senha" name="password" autoComplete="password" autoFocus />
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Lembrar-me" />
                    <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>Entrar</Button>

                    {error && <Typography color="error">{errorMessage}</Typography>}

                </Box>
            </Box>
            <Copyright site="www.avanade.com.br" sx={{mt:8, mb: 4}} />
            
            {open && <Snackbar open={open} hide={6} message="Usuario autenticado com sucesso... Aguarde..." />}
        </Container>

    </ThemeProvider>
    )
}