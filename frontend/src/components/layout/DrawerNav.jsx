import React, { useState } from 'react'
import { Toolbar, Typography, IconButton, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import HomeIcon from '@mui/icons-material/Home'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import VideoChatIcon from '@mui/icons-material/VideoChat'


const DrawerNav = ({ handleDrawerToggle, subMenuOpen, handleSubMenuToggle }) => {

    const drawerIconTextColor = "#ffffffe6";

    return (
        <div>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" noWrap component="div" color="white">
                    Menu
                </Typography>
                <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />

            <List component="nav">
                <ListItem disablePadding>
                    <ListItemButton >
                        <ListItemIcon sx={{ color: drawerIconTextColor }}>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Inicio"} sx={{ color: drawerIconTextColor }} />
                    </ListItemButton>
                </ListItem>

                <ListItemButton onClick={handleSubMenuToggle}>
                    <ListItemIcon sx={{ color: drawerIconTextColor }}>
                        <VideoLibraryIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Clases"} sx={{ color: drawerIconTextColor }} />
                    {subMenuOpen ? <ExpandLessIcon sx={{ color: drawerIconTextColor }} /> : <ExpandMoreIcon sx={{ color: drawerIconTextColor }} />}
                </ListItemButton>
                <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <VideoChatIcon sx={{ color: drawerIconTextColor }} />
                            </ListItemIcon>
                            <ListItemText primary="Clase 1" sx={{ color: drawerIconTextColor }} />
                        </ListItemButton>

                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <VideoChatIcon sx={{ color: drawerIconTextColor }} />
                            </ListItemIcon>
                            <ListItemText primary="Clase 2" sx={{ color: drawerIconTextColor }} />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </div>
    );
}

export default DrawerNav