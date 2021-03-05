import React, { Component } from 'react'
import YoutubeAPI from 'youtube-api-search'
import Search from './Search';
import Video from './Video';
import VideosList from './VideosList'

const APIKEY = "AIzaSyBizDOii2SdyvburjnrD54jCZ38gF4b7M4";

class YoutubeDashboard extends Component {

    constructor() {
        super();
        this.state = {
            videos: [],
            selectedVideo: null
        }
    }


    componentDidMount() {
        this.fetchYoutubeVideo("footall");
    }

    fetchYoutubeVideo = (term) => {
        console.log("Term:",term)
        let currentObject = this;
        YoutubeAPI({ key: APIKEY, term: term }, function (videos) {
            console.log('videos', videos);
            currentObject.setState({ videos: videos, selectedVideo: videos[0] })
        });
    }

    render() {
        let videoUpdateOnClick = selectedVideo => { this.setState({ selectedVideo }) }
        console.log("videoUpdate:", videoUpdateOnClick)
        return (
            <div>
                <h1>This is Youtube Dashboard</h1>
                <Search searchVideo={(term)=>{
                    this.fetchYoutubeVideo(term)
                }}></Search>
                <Video video={this.state.selectedVideo}></Video>
                <VideosList onVideoSelected={selectedVideo => { this.setState({ selectedVideo }) }} videos={this.state.videos}></VideosList>
            </div>

        )
    }
}

export default YoutubeDashboard;