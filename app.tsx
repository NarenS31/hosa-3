import React from 'react';
import { createRoot } from 'react-dom/client';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Marvin Ridge HOSA</h1>
        </div>
    );
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<HomePage />);

export default HomePage; 