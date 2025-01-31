import React from 'react';
import { Outlet } from 'react-router-dom';

//Импорт компонентов
import Header from '../Components/Header.tsx'

const MainLayout = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default MainLayout