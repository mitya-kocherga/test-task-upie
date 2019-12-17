import React from 'react';
import DropDownSection from './DropDownSection'

//mock
const number = 8,
    city = 'Your City';

export const FilterPanel = () => (
    <div className="filter-panel">
        <p>
            <strong>{number} Results </strong>
            in <span className="city-name">{city}</span>
        </p>
        <DropDownSection />
    </div>
)
