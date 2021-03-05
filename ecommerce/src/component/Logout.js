import React from 'react'

class Logout extends React.Component{
    render(){
        localStorage.removeItem('token')
        return(
            <div>
                <h1>Successfully Loggged Out</h1>
            </div>
        )
    }
}

export default Logout;