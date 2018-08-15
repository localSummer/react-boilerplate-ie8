import React from 'react';

class Video3 extends React.Component {
    componentDidMount() {
        $("#jquery_jplayer_1").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    title: "Big Buck Bunny",
                    m4v: "https://media.html5media.info/video.mp4",
                    ogv: "http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv",
                    webmv: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
                    poster: "http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png"
                }).jPlayer("play");
            },
            swfPath: "https://cdn.bootcss.com/jplayer/2.9.1/jplayer/jquery.jplayer.swf",
            supplied: "webmv, ogv, m4v",
            size: {
                width: "640px",
                height: "360px",
                cssClass: "jp-video-360p"
            },
            useStateClassSkin: true,
            autoBlur: false,
            smoothPlayBar: true,
            keyEnabled: true,
            remainingDuration: true,
            toggleDuration: true
        });
    }

    componentWillUnmount() {
        console.log('unmount')
        $("#jquery_jplayer_1").jPlayer("destroy")
    }

    render() {
        return (
            <div id="jp_container_1" className="jp-video jp-video-360p" role="application" aria-label="media player">
                <div className="jp-type-single">
                    <div id="jquery_jplayer_1" className="jp-jplayer"></div>
                    <div className="jp-gui">
                        <div className="jp-video-play">
                            <button className="jp-video-play-icon" role="button" tabindex="0">play</button>
                        </div>
                        <div className="jp-interface">
                            <div className="jp-progress">
                                <div className="jp-seek-bar">
                                    <div className="jp-play-bar"></div>
                                </div>
                            </div>
                            <div className="jp-current-time" role="timer" aria-label="time">&nbsp;</div>
                            <div className="jp-duration" role="timer" aria-label="duration">&nbsp;</div>
                            <div className="jp-controls-holder">
                                <div className="jp-controls">
                                    <button className="jp-play" role="button" tabindex="0">play</button>
                                    <button className="jp-stop" role="button" tabindex="0">stop</button>
                                </div>
                                <div className="jp-volume-controls">
                                    <button className="jp-mute" role="button" tabindex="0">mute</button>
                                    <button className="jp-volume-max" role="button" tabindex="0">max volume</button>
                                    <div className="jp-volume-bar">
                                        <div className="jp-volume-bar-value"></div>
                                    </div>
                                </div>
                                <div className="jp-toggles">
                                    <button className="jp-repeat" role="button" tabindex="0">repeat</button>
                                    <button className="jp-full-screen" role="button" tabindex="0">full screen</button>
                                </div>
                            </div>
                            <div className="jp-details">
                                <div className="jp-title" aria-label="title">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                    <div className="jp-no-solution">
                        <span>Update Required</span>
                        To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
                    </div>
                </div>
            </div>
        )
    }
}

export default Video3