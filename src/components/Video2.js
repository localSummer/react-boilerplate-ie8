import React from 'react'

class Video2 extends React.Component {
    render() {
        return (
            <div>
                <object width="720" height="452" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" align="middle">
                    <param name="src" value="https://media.html5media.info/video.mp4" />
                    <param name="allowfullscreen" value="true" />
                    <param name="quality" value="high" />
                    <param name="allowscriptaccess" value="always" />
                    <param name="wmode" value="opaque" />
                    <embed width="720" height="452" type="application/x-shockwave-flash" src="https://media.html5media.info/video.mp4" allowfullscreen="true" quality="high" allowscriptaccess="always" align="middle" />
                </object>
            </div>
        )
    }
}

export default Video2
