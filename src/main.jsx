import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import './styles.css';
import { Header } from './template/Header/Header';
import { Footer } from './template/Footer/Footer';
import { Cursor } from './UI/organisms/cursor/cursor';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
        <Header />
        <Cursor />
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
        <Footer />
        </BrowserRouter>
    </React.StrictMode>,
)
