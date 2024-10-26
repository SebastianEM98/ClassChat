import React from 'react'
import {AppBar as AppBarMUI, Toolbar, Button, IconButton, Typography} from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'


const AppBar = ({ drawerOpen, handleDrawerToggle, isLargeScreen, drawerWidth }) => {
    return (
        <AppBarMUI
                position="fixed"
                sx={{
                    width: drawerOpen && isLargeScreen ? `calc(100% - ${drawerWidth}px)` : "100%",
                    ml: drawerOpen && isLargeScreen ? `${drawerWidth}px` : 0,
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, ...(drawerOpen && isLargeScreen && { display: "none" }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ClassChat
                    </Typography>
                    <Button endIcon={<LogoutIcon />} color="inherit">Cerrar sesión</Button>
                </Toolbar>
            </AppBarMUI>
    )
}

export default AppBar