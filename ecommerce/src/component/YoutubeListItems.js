import React from 'react'

class YoutubeListItems extends React.Component{
    render(){
        console.log("props.video", this.props.video)
        var video = this.props.video;
        return(
            <div>
                    <li onClick={()=>{this.props.onVideoSelected(video)}} key={video.etag}>{video.snippet.title} <img src={video.snippet.thumbnails.medium.url}></img></li>
            </div>
        )
    }
}

export default YoutubeListItems;