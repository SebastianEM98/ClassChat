import React, { useEffect, useState } from 'react'
import { Box, Toolbar } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import ClassContainer from '../../pages/class/ClassContainer'
import AppBar from './AppBar'
import Drawer from './Drawer'

const MainLayout = () => {

    const drawerWidth = 280;

    const theme = useTheme();

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(true);
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    useEffect(() => {
        if (isLargeScreen) {
            setDrawerOpen(true);
        }
    }, [isLargeScreen]);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleSubMenuToggle = () => {
        setSubMenuOpen(!subMenuOpen);
    };


    return (
        <Box sx={{ display: "flex" }}>

            <AppBar
                drawerOpen={drawerOpen}
                handleDrawerToggle={handleDrawerToggle}
                isLargeScreen={isLargeScreen}
                drawerWidth={drawerWidth}
            />

            <Drawer
                drawerOpen={drawerOpen}
                handleDrawerToggle={handleDrawerToggle}
                subMenuOpen={subMenuOpen}
                handleSubMenuToggle={handleSubMenuToggle}
                isLargeScreen={isLargeScreen}
                drawerWidth={drawerWidth}
            />

            <Box
                component="section"
                sx={{
                    p: 3,
                    ml: drawerOpen && isLargeScreen ? `${drawerWidth}px` : "0px",
                    width: "100%",
                    height: "100vh",
                }}
            >
                <Toolbar />

                {/* Main Content */}
                <ClassContainer />

            </Box>
        </Box>
    )
}

export default MainLayout