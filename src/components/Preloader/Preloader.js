import React from 'react';
import preloader from '../../assets/images/preloader.svg';

export const Preloader = () => {
    return <div className="preloader">
        <img src={preloader} alt="preloader"/>
    </div>
};