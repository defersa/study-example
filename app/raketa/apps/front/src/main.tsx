import { StrictMode } from 'react';

import './styles.css';

import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { PickComponent } from './pik/pik';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
    <StrictMode>
        <BrowserRouter>
            <PickComponent />
        </BrowserRouter>
    </StrictMode>,
);
