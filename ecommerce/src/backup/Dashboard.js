import React from 'react'

class Dashboard extends React.Component{
    render(){
        if(!localStorage.getItem("token")){
            this.props.history.push("/login")
        }
        return(
            <div>
                <h1>This is Dashboard</h1>
            </div>
        )
    }
}

export default Dashboard;