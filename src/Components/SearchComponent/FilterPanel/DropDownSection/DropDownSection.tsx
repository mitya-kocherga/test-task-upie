import React from 'react';
import DropDown from '../../../DropDown';

const mock = [
    'Any Price',
    'Any Price2',
    'Any Price3',
    'Any Price4',
]

export const DropDownSection = () => (
    <div className="drop-down-section">
        <DropDown options={mock} value={mock[1]} />
        <DropDown options={mock} value={mock[1]} />
        <DropDown options={mock} value={mock[1]} />
    </div>
)
