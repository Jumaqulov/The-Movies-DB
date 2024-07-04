import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/Not found/not.found.page';
import { Provider } from 'react-redux'
import store from './store/store';
import './index.scss'
import router from './Routes/Router';
import "react-circular-progressbar/dist/styles.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    {router.map((link, index) =>
                        <Route path={link.path} key={index} element={link.Component}/>
                    )}
                    <Route path={'*'} element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
)