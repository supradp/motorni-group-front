import React from 'react';
import WhiteLogo from '../../assets/images/icons/white-logo.svg';
import './loadingModal.scss';

const LoadingModal = () => {
    return (
        <div className='preloader'>
            <div className='preloader__inner'>
                <div className='preloader__ring'>
                    <div className='preloader__ring-circle'></div>
                </div>
                <div className='preloader__logo'>
                    <img src={WhiteLogo} alt='Motorni' />
                </div>
            </div>
            <div className='preloader__bar'>
                <div className='preloader__bar-fill'></div>
            </div>
        </div>
    );
};

export default LoadingModal;