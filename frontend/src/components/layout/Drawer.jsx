import React from 'react'
import { Drawer as DrawerMUI } from '@mui/material'
import DrawerNav from './DrawerNav'

const Drawer = ({ drawerOpen, handleDrawerToggle, subMenuOpen, handleSubMenuToggle, isLargeScreen, drawerWidth }) => {

    return (
        <DrawerMUI
            variant={isLargeScreen ? "persistent" : "temporary"}
            open={drawerOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                display: { xs: "block" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth, bgcolor: "secondary.dark" },
            }}
        >
            <DrawerNav
                handleDrawerToggle={handleDrawerToggle}
                drawerOpen={drawerOpen}
                subMenuOpen={subMenuOpen}
                handleSubMenuToggle={handleSubMenuToggle}
            />
        </DrawerMUI>
    )
}

export default Drawer