import React from 'react';
import './UnityComponent.css'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

// Component used to render an iframe using React bootstrap.
class UnityComponent extends React.Component {
    render = () => {
        return (
            <ResponsiveEmbed aspectRatio='16by9' frameBorder='false'>
                <iframe src='https://itch.io/embed-upload/2780119?color=32b8ec'
                        allowfullscreen=''
                        width='960' height='600' frameborder='0'
                />
            </ResponsiveEmbed>
        )
    }
}
export default UnityComponent;