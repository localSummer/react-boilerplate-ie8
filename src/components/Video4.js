import React from 'react'

class Video4 extends React.Component {
    render() {
        return (
            <iframe 
                title='test'
                style={{width: '800px', height: '800px'}} 
                src="./iframe/player.html" 
                frameBorder="0"
            />
        )
    }
}

export default Video4