import React from 'react';

export const CardContainer: React.FC = ({ children }) => (
    <div className="card-container">
        <div className="card">
            {children}
        </div>
    </div>
)
