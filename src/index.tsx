import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Импорт навигации
import { BrowserRouter } from "react-router-dom";

//Импорт store
import { store } from './redux/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );
}


