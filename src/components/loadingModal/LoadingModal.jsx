import React from 'react';
import './loadingModal.scss'

const LoadingModal = () => {
    return (
        <>
            <div style={{ display: 'flex' }} className='modal'>
                <div className='modal__content'>
                    <div className='loader'></div>
                    <div className='modal-text'>Loading...</div>
                </div>
            </div>
        </>
    );
};

export default LoadingModal;