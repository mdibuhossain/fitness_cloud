import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { useFirebase } from '../Hooks/useFirebase';
import { selectUser } from '../features/userSlice';
import { selectIsLoading } from '../features/isloadingSlice';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const pages = [
    { title: 'Home', to: '/home' },
    { title: 'Schedule', to: '/schedule' },
    { title: 'Classes', to: '/classes' },
    { title: 'Contact us', to: '/contact' }
];

const useStyles = makeStyles((theme) => ({
    appBarTransparent: {
        backgroundColor: 'rgba(25, 118, 210, 0.5) !important',
    },
    appBarSolid: {
        backgroundColor: 'rgb(25, 118, 210) !important',
        transition: '0.5s ease-in-out'
    }
}));

const Navigation = () => {
    const { logOut } = useFirebase();
    const user = useSelector(selectUser);
    const isLoading = useSelector(selectIsLoading)
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const settings = [
        {
            title: 'Dashboard',
            action: null
        },
        {
            title: 'Logout',
            action: logOut
        }
    ];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [navBackground, setNavBackground] = React.useState('appBarTransparent');
    const navRef = React.useRef();
    navRef.current = navBackground;

    React.useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50;
            if (show)
                setNavBackground('appBarSolid')
            else
                setNavBackground('appBarTransparent')
        }
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, [])
    const classes = useStyles();
    console.log(navRef.current);
    return (
        <AppBar position="fixed" className={classes[navRef.current]}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        FITNESS
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <NavLink key={index} style={{ textDecoration: 'none', color: 'inherit' }} to={page.to}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        {page.title}
                                    </MenuItem>
                                </NavLink>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        FITNESS
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <NavLink key={index} to={page.to} style={{ textDecoration: 'none' }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white' }}
                                >
                                    {page.title}
                                </Button>
                            </NavLink>
                        ))}
                    </Box>
                    {
                        user?.email ? (
                            <Box sx={{ flexGrow: 0 }}>
                                <Typography variant='button' sx={{ display: 'inline', mr: 2 }}>{user.displayName}</Typography>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        {isLoading ? <CircularProgress color="inherit" />
                                            : <Avatar alt="avatar" src={user.photoURL} />
                                        }
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting, index) => (
                                        <MenuItem sx={{ p: 0 }} key={index} onClick={handleCloseUserMenu}>
                                            <Typography sx={{ width: 1, px: 2, py: 1 }} onClick={setting.action} textAlign="center">{setting.title}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        ) : <NavLink to='/login' style={{ textDecoration: 'none', color: 'inherit' }}><Button variant=''>Login</Button></NavLink>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navigation;
