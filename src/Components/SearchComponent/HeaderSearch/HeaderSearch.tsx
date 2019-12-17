import React from 'react';
import Button from '../../Button';
import { Image } from '../../../img';

export const HeaderSearch: React.FC = () => (
    <div className="header">
        <Image name="menuPic" />
        <div className="right">
            <Image name="bellPic" />
            <Button text="Sign Up" />
            <Button filled text="Login" />
        </div>
    </div>
)
