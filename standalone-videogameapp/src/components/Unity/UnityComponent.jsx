import React from 'react';

const frame = '<iframe frameBorder=0 src="https://itch.io/embed-upload/2717928?color=333333" allowFullScreen="" height="580px" width="100%" '

const IFrame = (props) => {
    return (
        <div dangerouslySetInnerHTML={ {__html: props.iframe?props.iframe: ''}} />
    )
};

const UnityComponent = () => {
    return (
        <div className='unity'>
            <iframe src="https://itch.io/embed-upload/2717928?color=333333" />
        </div>
    )
};

export default UnityComponent;