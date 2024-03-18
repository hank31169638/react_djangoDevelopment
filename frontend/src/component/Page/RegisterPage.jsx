import React, {useState} from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import PageUI from "../UI/PageUI";
import {useAuth} from "../context/AuthContext";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function RegisterPage() {

    const [errors, setErrors] = useState({})
    const { login } = useAuth();

    const formFields = [
        {id: 'username', label: 'UserName', name: 'username', autoComplete: 'username'},
        {id: 'email', label: 'Email Address', name: 'email', autoComplete: 'email',type: 'email'},
        {id: 'password', label: 'Password', name: 'password', autoComplete: 'current-password', type: 'password'},
        {id: 'password2', label: 'Password2', name: 'password2', autoComplete: 'current-password', type: 'password'},
    ];


    const handleSubmit = (event) => {
        event.preventDefault();

        // reset the errors status
        setErrors({});

        const data = new FormData(event.currentTarget);

        try {
            fetch(`${process.env.REACT_APP_API_BASE_URL}/api/register/`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: data.get('username'),
                    email: data.get('email'),
                    password: data.get('password'),
                    password2: data.get('password2')
                })
            })
                .then((response) => response.json())
                .then((d) => {
                    if (d.status === 'success') {
                        alert('Registration successful');
                        login(d.token)

                    } else {
                        alert('Registration failed');
                        setErrors(d.errors)
                    }
                })
        } catch (error) {
            console.log("can't not get backend")
        }

    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{height: '100vh'}}>
                <CssBaseline/>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                >
                    <PageUI/>
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 24,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: {
                                xs: '40vh', // which screen's width < 600px
                                sm: '45vh', // which screen's width < 960px
                                md: '55vh', // which screen's width < 1280px
                            },
                            marginTop: '142px',
                        }}
                    >
                        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            註冊
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit}
                             sx={{
                                 mt: 1,
                                 width: {
                                     xs: '85vw', // which screen's width < 600px
                                     sm: '55vw', // which screen's width < 960px
                                     md: '30vw', // which screen's width < 1280px
                                 },

                             }}>

                            {formFields.map((field, key) => (
                                <div style={{minHeight: '12vh'}} key={key}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id={field.id}
                                        label={field.label}
                                        name={field.name}
                                        autoComplete={field.autoComplete}
                                        autoFocus
                                        error={!!errors[field.name]}
                                        helperText={errors[field.name] ? errors[field.name].join(' ') : ''}
                                        type={field.type}
                                    />
                                </div>
                            ))}

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                註冊
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        忘記密碼?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        {"已經有帳號 ? 前往登入"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{mt: 5}}/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

