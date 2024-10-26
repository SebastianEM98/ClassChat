import { Visibility, VisibilityOff, Person, Lock } from '@mui/icons-material'
import { Box, Button, CircularProgress, Container, FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import useFakeLoading from '../../hooks/useFakeLoading'

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const {loading, fakeLoading} = useFakeLoading();

    const loginUser = () => {
        
        fakeLoading("/home");
    }


    return (
        <Container sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>

            {loading ? (
                <CircularProgress />
            ) : (
                <Paper elevation={8} sx={{ width: { xl: "50%", lg: "50%", md: "60%", xs: "80%" }, height: "auto", py: "40px", px: "20px", borderRadius: "15px" }}>

                    <Typography variant="h4" sx={{ fontWeight: "900", textAlign: "center", mb: "50px" }}>
                        Iniciar Sesión{' '}
                        <Typography component="span" variant="h4" sx={{ color: "primary.main", fontWeight: "900" }}>
                            ClassChat
                        </Typography>
                    </Typography>

                    <Box component="form" onSubmit={loginUser} sx={{ width: "80%", display: "flex", flexDirection: "column", m: "0 auto" }}>

                        <Box component="div" sx={{ display: "flex", alignItems: "center", mb: "30px" }}>
                            <Person sx={{ fontSize: "40px", mr: "15px" }} />
                            <TextField id="username" fullWidth color="secondary" label="Usuario" placeholder="Ingrese su nombre de usuario" variant="outlined" />
                        </Box>

                        <Box component="div" sx={{ display: "flex", alignItems: "center", mb: "30px" }}>
                            <Lock sx={{ fontSize: "40px", mr: "15px" }} />
                            <FormControl sx={{}} variant="outlined" color="secondary" fullWidth>
                                <InputLabel>Contraseña</InputLabel>
                                <OutlinedInput
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setShowPassword((show) => !show)} edge="end">
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Contraseña"
                                    placeholder="Ingrese su contraseña"
                                />
                            </FormControl>
                        </Box>

                        <Link href="#" underline="hover" sx={{ width: "max-content", mb: "30px", color: 'secondary.main', "&:hover": { color: "primary.main" } }}>
                            ¿No tiene una cuenta? Regístrese aquí
                        </Link>

                        <Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
                            <Button type="submit" variant="contained" sx={{ width: "100%", }}>Ingresar</Button>
                        </Box>

                    </Box>

                </Paper>
            )}
        </Container>
    )
}

export default Login