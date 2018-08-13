import React from 'react'
import '../static/js/html5media'

class Video extends React.Component {
    render() {
        return (
            <div>
                <video class="video" poster="//media.html5media.info/poster.jpg" width="618" height="347" controls preload>
                    <source src="//media.html5media.info/video.mp4" media="only screen and (min-device-width: 568px)"></source>
                    <source src="//media.html5media.info/video.iphone.mp4" media="only screen and (max-device-width: 568px)"></source>
                    <source src="//media.html5media.info/video.ogv"></source>
                </video>
            </div>
        )
    }
}

export default Video
