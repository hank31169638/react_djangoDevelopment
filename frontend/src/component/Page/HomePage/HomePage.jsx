import React from 'react';
import '../../../css/style.css'
import NavbarUI from "../../UI/navbarUI/NavbarUI";
import VerticalNavbarUI from "../../UI/navbarUI/VerticalNavbarUI";
import {Box} from "@mui/material";

const HomePage = () => {
    return (
        <Box>
            <VerticalNavbarUI/>
            <Box sx={{height: '100vh', paddingRight: '1rem'}}>
                <NavbarUI/>
            </Box>
        </Box>
    );
};

export default HomePage;
