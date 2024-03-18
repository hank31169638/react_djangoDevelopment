import React, {useEffect, useState} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useAuth} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';


const drawerWidth = 200;
const navItems = [['event', '活動'], ['Logout', '登出']];
const navMobileItems = [['event', '活動'], ['profile', '個人檔案'], ['Logout', '登出']];
export default function NavbarUI(props) {

    const {authToken, logout} = useAuth();

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const Navigate = useNavigate();
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        // 确保组件挂载后再添加事件监听器
        const handleScroll = () => {
            const appBar = document.getElementById('myAppBar'); // 确保你的AppBar有这个ID
            if (appBar) {
                const sticky = appBar.offsetTop;// 获取AppBar的顶部偏移量
                if (window.scrollY > 21) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // 清理函数，组件卸载时移除事件监听器
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleLogout = () => {
        logout()
        Navigate('/redirect')
    }

    // const container = typeof window !== 'undefined' ? () => document.body : undefined;


    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>

            <List>
                {navMobileItems.map((item, index) => (
                    item[0] === 'Logout' ? (
                        <ListItem key={item[0]} disablePadding>
                            <ListItemButton sx={{textAlign: 'center'}} onClick={handleLogout}>
                                <ListItemText primary={item[1]}/>
                            </ListItemButton>
                        </ListItem>

                    ) : (
                        <ListItem key={item[0]} disablePadding>
                            <ListItemButton sx={{textAlign: 'center'}} onClick={() => Navigate(item[0])}>
                                <ListItemText primary={item[1]}/>
                            </ListItemButton>
                        </ListItem>
                    )

                ))}
            </List>
        </Box>
    );


    return (

        <CssBaseline>
            <AppBar component="header"
                    position="sticky"
                    id='myAppBar'
                    sx={{
                        borderRadius: '0.75rem',
                        m: '0.25rem',
                        marginLeft: {sm: '15.25rem', xs: '1rem'},
                        top: '1.3rem',
                        width: 'auto',
                        boxShadow: isSticky ? 'rgba(255, 255, 255, 0.9) 0rem 0rem 0.0625rem 0.0625rem inset, rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem' : 'none',
                        backgroundColor: isSticky ? 'rgb(255,255,255,0.8)' : 'rgb(240, 242, 245)',
                        backdropFilter: isSticky ? 'saturate(300%) blur(0.175rem)' : 'none',
                    }}>
                <Toolbar sx={{borderRadius: '0.75rem', color: 'black'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Box>
                        <Breadcrumbs aria-label="breadcrumb" separator="/" sx={{display: 'flex', flexWrap: 'wrap'}}>
                            <Link underline="hover" color="inherit" href="/"
                                  sx={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyItems: 'center',
                                      '&:hover': {
                                          backgroundColor: 'rgba(0, 0, 0, 0.1)', // 灰色背景的悬停效果
                                          borderRadius: '0.625rem', // 如果你想要圆角效果
                                          padding: '0.05rem',
                                          transition: '0.5s',
                                      }
                                  }}>
                                <HomeIcon fontSize="inherit"/>
                            </Link>
                            <Link underline="none" color="inherit">
                                首頁
                            </Link>
                        </Breadcrumbs>
                        <Typography component='h6'>
                            儀表板
                        </Typography>
                    </Box>
                    <Box sx={{display: {xs: 'none', sm: 'block'}, marginLeft: 'auto'}}>
                        {!!authToken ? (
                            navItems.map((item) => (
                                item[0] === 'Logout' ? (
                                    <Button key={item[0]} onClick={handleLogout}
                                            sx={{color: "inherit", borderRadius: "0.75rem",}}>
                                        {item[1]}
                                    </Button>
                                ) : (
                                    <Button key={item[0]} onClick={() => Navigate('/' + item[0])}
                                            sx={{color: "inherit", borderRadius: "0.75rem",}}>
                                        {item[1]}
                                    </Button>
                                )
                            ))
                        ) : (
                            <div></div>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>

            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </CssBaseline>

    )
}
