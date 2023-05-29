import React from 'react';

const CuadroInfo = ({info}) => {
    return (
        <>
        <div className='col-9'>
            <p>{info.fullName}</p>
            <p>{info.title}</p>
            <p>{info.department}</p>
        </div>
        </>
    );
};

export default CuadroInfo;