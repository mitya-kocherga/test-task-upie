import React from 'react';
import BookableItem from '../../BookableItem';
import { BookableItemProp } from '../../BookableItem/BookableItem';

//@ts-ignore
export const SearchResults = ({results, hoverMarker}) => {
    return (
        <div className="search-results">
            {results.map((item: BookableItemProp) => (
                <BookableItem {...item} onHover={hoverMarker} key={item.id} />
            ))}
        </div>
    )
}
