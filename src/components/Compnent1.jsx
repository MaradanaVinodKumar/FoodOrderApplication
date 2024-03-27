import React from 'react';
import { useSelector } from 'react-redux';

function Compnent1(props) {
    const count = useSelector(state => state);

    return (
        <div className='component'>
            {count.count}
        </div>
    );
}

export default Compnent1;