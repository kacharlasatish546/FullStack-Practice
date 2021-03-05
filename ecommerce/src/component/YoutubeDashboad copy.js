import React, { Component } from 'react'
import YoutubeAPI from 'youtube-api-search'
import Video from './Video';
import VideosList from './VideosList'

const APIKEY = "AIzaSyDWOIT_ETwq9cE7e0VkvjGw6nQd3lSIVJM";

class YoutubeDashboard extends Component {

    constructor() {
        super();
        this.state = {
            videos: [],
            selectedVideo: null
        }
    }


    componentDidMount() {
       this.fetchYoutubeVideos("football");
    }

    fetchYoutubeVideos = (term) =>{
        console.log("componentDidMount")
        let currentObject = this;
        YoutubeAPI({ key: APIKEY, term: term }, function (videos) {
            console.log('videos componentDidMount', videos);
            currentObject.setState({ videos: videos, selectedVideo: videos[0] })
        });
    }

    render() {
        let videoUpdateOnClick = selectedVideo => { this.setState({ selectedVideo }) }
        console.log("videoUpdate:", videoUpdateOnClick)
        return (
            <div>
                <h1>This is Youtube Dashboard</h1>
                <Video video={this.state.selectedVideo}></Video>
                <VideosList onVideoSelected={selectedVideo => { this.setState({ selectedVideo }) }} videos={this.state.videos}></VideosList>
            </div>

        )
    }
}

export default YoutubeDashboard;