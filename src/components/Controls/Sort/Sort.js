import React from 'react';

export const Sort = ({ setSortValue, sortValue, setSortOrder, sortOrder, isEng }) => {

    const chooseSortValueHandler = ({ target }) => {
        setSortValue(target.name);
    };

    const chooseSortOrderHandler = ({ target }) => {
        setSortOrder(target.name);
    };

    return <div className="controls__item  controls__sort">
        <h4 className="controls__item-head">{isEng ? 'Sort' : 'Сортировка'}</h4>

        <div className="controls__item-btns">
            <button
                name="id"
                onClick={chooseSortValueHandler}
                className={`controls__item-btn${sortValue === 'id' ? ' active' : ''}`}
            >
                {isEng ? 'ID' : 'Айди'}
            </button>
            <button
                name="name"
                onClick={chooseSortValueHandler}
                className={`controls__item-btn${sortValue === 'name' ? ' active' : ''}`}
            >
                {isEng ? 'Name' : 'Имя'}
            </button>
            <button
                name="age"
                onClick={chooseSortValueHandler}
                className={`controls__item-btn${sortValue === 'age' ? ' active' : ''}`}
            >
                {isEng ? 'Age' : 'Возраст'}
            </button>
        </div>

        <div className="controls__item-btns">
            <button
                name="asc"
                onClick={chooseSortOrderHandler}
                className={`controls__item-btn${sortOrder === 'asc' ? ' active' : ''}`}
            >
                {isEng ? 'Ascending' : 'По возрастанию'}
            </button>
            <button
                name="desc"
                onClick={chooseSortOrderHandler}
                className={`controls__item-btn${sortOrder === 'desc' ? ' active' : ''}`}
            >
                {isEng ? 'Descending' : 'По убыванию'}
            </button>
        </div>
    </div>
};