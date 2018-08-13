import React from 'react'

class Video extends React.Component {
    handlePlay = () => {
        this.embed.play()
    }

    handlePause = () => {
        this.embed.pause()
    }

    handleStateChange = (stateChange) => {
        console.log(stateChange)
    }

    handleOnPlay = () => {
        console.log('start play')
    }

    handleOnPause = () => {
        console.log('pause')
    }

    render() {
        return (
            <div>
                <embed 
                    title="video" 
                    ref={(embed) => {this.embed = embed}}
                    src="https://media.html5media.info/video.mp4"
                    width="618" 
                    height="347" 
                    controls
                    onreadystatechange={this.handleStateChange}
                    onplay={this.handleOnPlay}
                    onpause={this.handleOnPause}
                />
                <button onClick={this.handlePlay}>播放</button>
                <button onClick={this.handlePause}>暂停</button>
            </div>
        )
    }
}

export default Video
