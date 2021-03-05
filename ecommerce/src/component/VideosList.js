import React from 'react'
import YoutubeListItems from './YoutubeListItems';

class VideosList extends React.Component {

    

    renderVideosList(){
        console.log("renderVideosList",this.props.videos)
        var videorendered = this.props.videos.map(video => {   
           // return <li onClick={()=>{this.props.onVideoSelected(video)}} key={video.etag}>{video.snippet.title} <img src={video.snippet.thumbnails.medium.url}></img></li>
           return <YoutubeListItems onVideoSelected={this.props.onVideoSelected} video={video}></YoutubeListItems>
        })
        return videorendered;
    }


    render() {

        console.log("props: in videos List",this.props)
        
        return (
            <div>
                <h1>Videos List</h1>
                
                {this.renderVideosList()}
            </div>
        )
    }
}

export default VideosList;