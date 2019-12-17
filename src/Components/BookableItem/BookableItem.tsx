import React, { Fragment } from 'react';
import { Image } from '../../img';
import cn from 'classnames';

export interface BookableItemProp {
    id: number;
    selected: boolean;
    name: string;
    address: string;
    price: number;
    params: Params;
    onHover: (id: number) => {};
}
interface Params {
    bedrooms: number;
    bathrooms: number;
    square: number;
}
interface ItemPram {
    param: string | number;
    paramName: string;
}

export const BookableItem = (props: BookableItemProp) => {
    const { name, address, price, params, onHover, id, selected } = props;
    return (
        <div
            className={cn("bookable-item", selected ? "selected" : '')}
            onMouseOver={() => onHover(id)}
            onMouseLeave={() => onHover(0)}
        >
            <Image className={cn("picture", "elem")} name="coolRoom" /* here should be dynamic picture */ />
            <span className={cn("name", "elem")}>{name}</span>
            <span className={cn("address", "elem")}>{address}</span>
            <span className={cn("price", "elem")}>${price}</span>
            <ItemParams {...params} />
        </div>
    )
}

const ItemParam = ({ paramName, param }: ItemPram) => (
    <Fragment>
        <Image name={paramName} />
        <span>{param}</span>
    </Fragment>
)

const ItemParams = (params: Params) => (
    <div className="item-param">
        <ItemParam param={params.bedrooms} paramName="bedroom" />
        <ItemParam param={params.bathrooms} paramName="bathroom" />
        <ItemParam param={params.square} paramName="square" />
    </div>
)


