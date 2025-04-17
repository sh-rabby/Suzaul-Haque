import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './src/Components/Header/NavBar';
import Footer from './src/Components/Footer';
import HeaderTop from './src/Components/Header/HeaderTop';


const Root = () => {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;