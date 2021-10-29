import React, { Component } from 'react'
let baseUrl = 'http://localhost:3003'
class Logout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userLoggedIn: '',
        }
    }
    logoutUser = () => {
        console.log('hit logout button')
        const url = baseUrl + '/users/logout'
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            
            // credentials: 'include'
        })
        .then(res => {
                console.log(res.status)
                console.log('logout successful!')
                this.setState({
                    userLoggedIn: false
                })
            


            })
            console.log(this.state)
    }

    render(){
        return(
            <div className ='logout'>
                <div className='container'>
                    <div className='row align-items-center my-5'>
                        <form onSubmit={this.logoutUser}>

                            
                            <input type='submit' value='logout'/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Logout