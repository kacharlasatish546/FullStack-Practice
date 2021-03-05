import React from 'react'

class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            term: ''
        }
    }
    searchVideos = (event) => {
        event.preventDefault();
        console.log("term   searchVideo "+this.state.term)
        this.props.searchVideo(this.state.term)
    }


    render() {
        return (
            <div>
                <input onChange={(event) => { this.setState({ term: event.target.value }) }} type="text"></input>
                <button onClick={this.searchVideos}>Search</button>
            </div>
        )
    }
}

export default Search;