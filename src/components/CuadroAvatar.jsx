import React from 'react';

const CuadroAvatar = ({img}) => {
    return (
        <>
        <div className='col-3'>
            <img src={img} className='img-fluid'/>
        </div>
        </>
    );
};

export default CuadroAvatar;