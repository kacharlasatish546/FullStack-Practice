import React, { Component } from 'react'

class Video extends Component {
    render() {
        console.log('selected video', this.props.video);
        var video = Object.assign({}, this.props.video);
        console.log('video', video);
        var vid = Object.assign({}, video.id);
        console.log('vid', vid);
        var videoId = vid.videoId;
        console.log('videoId',videoId)


        let url = "https://www.youtube.com/embed/"+videoId;
        return (
            <div>
                <h1>Video</h1>
                <iframe width="1000" height="400" src={url}></iframe>
            </div>
        )
    }
}

export default Video;