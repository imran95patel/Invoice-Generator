import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Home from './Home';
import { Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// import icon8 from './my-channel.jpeg';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


const theme = createTheme();

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Hardcoded credentials (in a real app, these should be stored securely on the server)
    const validUsername = "lotus";
    const validPassword = "lotus1234";

    if (username === validUsername && password === validPassword) {
      // Successful login logic (e.g., redirect to another page)
      <h4>{<pre>Login Successful !</pre>}</h4>
      toast.success('Login successful!')
    //   alert('Login successful!');
      navigate("./home");
    //   navigate('./listing')
    } else {
        alert("Invalid username or password")
      setError("Invalid username or password");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs"  style={{'margin-top':'150px'}}>
        <CssBaseline />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: theme.spacing(8),
          }}
        >
            <Stack direction="row" spacing={2}>
      <Avatar alt="Travis Howard" src='' />
    </Stack>
          <Typography component="h1" variant="h5">
            {/* Login */}
          </Typography>
          <form
            style={{
              width: '100%',
              marginTop: theme.spacing(1),
            }}
            noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
              style={{ margin: theme.spacing(3, 0, 2) }}
            >
              Login
            </Button>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
