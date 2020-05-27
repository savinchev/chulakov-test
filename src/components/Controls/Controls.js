import React from 'react';
import { Sort } from './Sort/Sort';
import { View } from './View/View';

export const Controls = ({ setSortValue, sortValue, setSortOrder, sortOrder, isEng, preview, setPreview }) => {
    return <div className="controls">
        <Sort
            setSortValue={setSortValue}
            sortValue={sortValue}
            setSortOrder={setSortOrder}
            sortOrder={sortOrder}
            isEng={isEng}
        />
        <View
            isEng={isEng}
            preview={preview}
            setPreview={setPreview}
        />
    </div>
}