import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './index';

import '@packages/styles/src/index.scss';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root);
container.render(<App />);
