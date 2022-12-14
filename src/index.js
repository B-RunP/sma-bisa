import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import Navbar from './navbar/NavvBar';
import Footer from './footer/Footer';

import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Navbar />
        <App />
        <Footer />
    </BrowserRouter>
);
