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
    Divider,
} from "@mui/material";

import {
    Menu as MenuIcon,
} from "@mui/icons-material";

const drawerWidth = 240;
const navItems = [
    {
        name: 'Dashboard',
        href: 'https://dashboard.amirhossein.info'
    },
    {
        name: 'Docs',
        href: 'https://docs.amirhossein.info'
    }
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
                onClick={() => history.push('/')}
            >
                Telegram Factor Authentication
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
                                href={item.href}
                                sx={{ textAlign: 'center' }}
                            >
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
                variant="outlined"
                color="primary"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
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
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            onClick={() => history.push('/')}
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', sm: 'block' },
                                cursor: "pointer",
                            }}
                        >
                            Telegram Factor Authentication
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {
                                navItems.map((item) => (
                                    <Button
                                        key={item} sx={{ color: '#fff' }}
                                        href={item.href}
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