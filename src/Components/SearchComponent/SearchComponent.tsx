import React from 'react';
import HeaderSearch from './HeaderSearch';
import FilterPanel from './FilterPanel';
import SearchResults from './SearchResults';

export const SearchComponent: React.FC = () => (
    <div>
        <HeaderSearch />
        <FilterPanel />
        <SearchResults />
    </div>
)
