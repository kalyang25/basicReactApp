import * as React from 'react';
import './MainContent.css';

const MainContent = (props: any) => {
    return (
        <div className='container'>
            {props.children}
        </div>
    )
};

export default MainContent;