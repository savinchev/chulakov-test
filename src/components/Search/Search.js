import React from 'react';

export const Search = ({ isEng, filterValue, changeFilterValue }) => {
    return <div>
        <input onChange={changeFilterValue}
            value={filterValue}
            className="searchInput"
            type="text"
            placeholder={isEng ? 'Search...' : 'Поиск...'}
        />
    </div>
};