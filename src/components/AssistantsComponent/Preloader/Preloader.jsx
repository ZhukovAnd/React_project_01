import React from 'react';
import preloader from './../../../assets/images/preloader_.svg';

const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt='Loading...' />
        </div>
    )
}

export default Preloader;