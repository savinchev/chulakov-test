import React from 'react';

export const LangSwitch = ({ changeLanguage, isEng }) => {
    return <div className="lang-switch">
        <span>En</span>
        <span onClick={changeLanguage} className={`lang-switch__checkbox${isEng ? '' : ' active'}`}></span>
        <span>Ru</span>
    </div>
}
