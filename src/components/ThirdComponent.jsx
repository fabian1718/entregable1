import React from 'react';

const ThirdComponent = ({change}) => {
    return (
        <div>
            <button onClick={change}><i className="fa-solid fa-angle-right"></i></button> 
        </div>
    );
};

export default ThirdComponent;