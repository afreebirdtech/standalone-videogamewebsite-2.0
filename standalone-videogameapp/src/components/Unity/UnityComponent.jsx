import React from 'react';
import './UnityComponent.css'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import Button from 'react-bootstrap/Button'
// Component used to render an iframe using React bootstrap.
class UnityComponent extends React.Component {
    render = () => {
        return (
            <a className='playButton' href="https://afreebird.itch.io/adventure-in-the-arts">Play</a>
        )
    }
}
// removed and added it to its own seperate component for later use!
const itchEmbeddedFrame = () => {
  return (
    <ResponsiveEmbed aspectRatio='16by9' frameBorder='false'>
      <iframe src='https://itch.io/embed-upload/2958632?color=333333'
              allowfullscreen=''
              width='960' 
              height='600' 
              frameborder='0'
      />
    </ResponsiveEmbed>
  )
}

export default UnityComponent;