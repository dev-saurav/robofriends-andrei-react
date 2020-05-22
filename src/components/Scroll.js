import React from 'react';

const Scroll = (props) => {

    const style = {
        overflowY: 'scroll',
        border: '1px soild black',
        height: '500px'
    }

    return (
        <div style={style}>
            {props.children}
        </div>
    )
}

export default Scroll;