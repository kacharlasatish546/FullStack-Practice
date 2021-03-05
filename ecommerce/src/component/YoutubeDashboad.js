import React, { Component } from 'react'
import YoutubeAPI from 'youtube-api-search'
import Search from './Search';
import Video from './Video';
import VideosList from './VideosList'

const APIKEY = "AIzaSyAF8XbNxAkWSbolmIcKWFFFL4FZndbKFZY";

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
                <Search searchVideo={(term=>{
                    console.log("Term Dashboard",term)
                    this.fetchYoutubeVideos(term);
                })}></Search>
                <Video video={this.state.selectedVideo}></Video>
                <VideosList onVideoSelected={selectedVideo => { this.setState({ selectedVideo }) }} videos={this.state.videos}></VideosList>
            </div>

        )
    }
}

export default YoutubeDashboard;