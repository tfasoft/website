import { useHistory } from 'react-router-dom';
import { useState } from "react";

import {
    Box,
    Container,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Divider,
} from "@mui/material";

import {
    Menu,
    Dashboard,
    MenuBook,
    Biotech,
    RssFeed,
    Email,
} from "@mui/icons-material";

const drawerWidth = 240;
const navItems = [
    {
        name: 'Dashboard',
        href: 'https://dashboard.amirhossein.info',
        icon: <Dashboard />,
        inside: false,
    },
    {
        name: 'Docs',
        href: 'https://docs.amirhossein.info',
        icon: <MenuBook />,
        inside: false,
    },
    {
        name: 'Demo',
        href: 'https://demo.amirhossein.info',
        icon: <Biotech />,
        inside: false,
    },
    {
        name: 'Blog',
        href: 'https://blog.amirhossein.info',
        icon: <RssFeed />,
        inside: false,
    },
    {
        name: 'Contact Us',
        href: '/contact',
        icon: <Email />,
        inside: true,
    },
];

const Navbar = () => {
    const history = useHistory();

    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Toolbar />
            <Typography
                variant="h6"
                sx={{ my: 2 }}
            >
                TFASoft services
            </Typography>
            <Divider />
            <List>
                {
                    navItems.map((item) => (
                        <ListItem
                            key={item}
                            disablePadding
                        >
                            <ListItemButton
                                href={!item.inside && item.href}
                                onClick={() => item.inside && history.push(item.href)}
                            >
                                <ListItemIcon>{ item.icon }</ListItemIcon>
                                <ListItemText
                                    primary={item.name}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );

    const container = undefined;

    return (
        <Box>
            <AppBar
                color="primary"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                elevation={0}
            >
                <Container>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <Menu />
                        </IconButton>
                        <Typography
                            variant="h6"
                            onClick={() => history.push('/')}
                            sx={{
                                cursor: "pointer",
                                flexGrow: 1,
                            }}
                        >
                            TFASoft
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {
                                navItems.map((item) => (
                                    <Button
                                        key={item} sx={{ color: '#fff' }}
                                        href={!item.inside && item.href}
                                        onClick={() => item.inside && history.push(item.href)}
                                    >
                                        {item.name}
                                    </Button>
                                ))
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Toolbar />
        </Box>
    );
};

export default Navbar;