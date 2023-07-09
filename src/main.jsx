import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import './styles.css';
import { Header } from './template/Header/Header';
import { Footer } from './template/Footer/Footer';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
        <Footer />
        </BrowserRouter>
    </React.StrictMode>,
)
