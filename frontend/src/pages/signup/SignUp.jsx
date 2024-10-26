import { Visibility, VisibilityOff, Person, Lock, AssignmentInd } from '@mui/icons-material'
import { Box, Button, CircularProgress, Container, FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import useFakeLoading from '../../hooks/useFakeLoading'

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {loading, fakeLoading} = useFakeLoading();

    const saveUser = () => {
        
        fakeLoading("/login");
    }


    return (
        <Container sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>

            {loading ? (
                <CircularProgress />
            ) : (
                <Paper elevation={8} sx={{ width: { xl: "50%", lg: "50%", md: "60%", xs: "80%" }, height: "auto", py: "40px", px: "20px", borderRadius: "15px" }}>

                    <Typography variant="h4" sx={{ fontWeight: "900", textAlign: "center", mb: "50px" }}>
                        Registro{' '}
                        <Typography component="span" variant="h4" sx={{ color: "primary.main", fontWeight: "900" }}>
                            ClassChat
                        </Typography>
                    </Typography>

                    <Box component="form" onSubmit={saveUser} sx={{ width: "80%", display: "flex", flexDirection: "column", m: "0 auto" }}>

                        <Box component="div" sx={{ display: "flex", alignItems: "center", mb: "30px" }}>
                            <AssignmentInd sx={{ fontSize: "40px", mr: "15px" }} />
                            <TextField id="name" fullWidth color="secondary" label="Nombre" placeholder="Ingrese su nombre" variant="outlined" />
                        </Box>

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

                        <Box component="div" sx={{ display: "flex", alignItems: "center", mb: "30px" }}>
                            <Lock sx={{ fontSize: "40px", mr: "15px" }} />
                            <FormControl sx={{}} variant="outlined" color="secondary" fullWidth>
                                <InputLabel>Confrimar contraseña</InputLabel>
                                <OutlinedInput
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setShowConfirmPassword((show) => !show)} edge="end">
                                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Confrimar contraseña"
                                    placeholder="Confirme la contraseña"
                                />
                            </FormControl>
                        </Box>

                        <Link href="#" underline="hover" sx={{ width: "max-content", mb: "30px", color: 'secondary.main', "&:hover": { color: "primary.main" } }}>
                            ¿Ya tiene una cuenta? Inicie sesión aquí
                        </Link>

                        <Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
                            <Button type="submit" variant="contained" sx={{ width: "100%", }} >Registrarse</Button>
                        </Box>

                    </Box>

                </Paper>
            )}
        </Container>
    )
}

export default SignUp