import React from 'react'

class VideosList extends React.Component {

    

    renderVideosList(){
        var videorendered = this.props.videos.map(video => {   
            return <li onClick={()=>{this.props.onVideoSelected(video)}} key={video.etag}>{video.snippet.title} <img src={video.snippet.thumbnails.medium.url}></img></li>
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