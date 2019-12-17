import React from 'react';

import menuPic from './menu.png';
import bellPic from './ring.png';
import coolRoom from './coolRoom.jpg';
import bedroom from './bedroom.png';
import bathroom from './bathroom.png';
import square from './square.png';

interface ImageProps {
    name: string;
    className?: string;
};

const getPicByName = (name: string) => {
    switch (name) {
        case 'menuPic':
            return menuPic;
        case 'bellPic':
            return bellPic;
        case 'coolRoom':
            return coolRoom;
        case 'bedroom':
            return bedroom;
        case 'bathroom':
            return bathroom;
        case 'square':
            return square;
        default: //should be any empty img
            break;
    }
};

export const Image = ({ name, className }: ImageProps) => (
    <div>
        <img className={className ? className : "menu-img"} src={getPicByName(name)} alt="PicturePicture" />
    </div>
);
