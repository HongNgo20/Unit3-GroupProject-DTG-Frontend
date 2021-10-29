import React, { Component } from 'react'

let baseUrl = 'http://localhost:3003'

class Login extends Component {
    
    constructor(props) {
        super(props)
    
    this.state = {
            // username: '',
            // password: '',
            // userLoggedIn: false,
        }
    }

    // getUsers = () => {
    //     // fetch from the backend
    //     fetch(baseUrl + '/users', {
    //         credentials: 'include'
    //     })
    //     .then(res => {
    //         if(res.status === 200) {
         
    //             return res.json()
    //         } else {
    //             return []
    //         }
    //     })
    // }

    // login 
    // loginUser = async (e) => {
       
    //     console.log('loginUser')
    //     e.preventDefault()

    //     const url = baseUrl + '/users/login'
    //     const loginBody = {
    //         username: e.target.username.value,
    //         password: e.target.password.value
    //     }
    //     try {
            
    //         const response = await fetch(url, {
    //             method: 'POST',
    //             body: JSON.stringify(loginBody),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             credentials: 'include'
    //         })

    //         console.log(response)
    //         console.log(response.body)
    //         console.log('BODY: ', response.body)
    //         const responseData= await response.json()
    //         console.log(responseData)
    //         if(response.status === 200) {
    //             this.getUsers()
    //             console.log('🌈 login successful!🌈')
    //             this.setState({
    //                 userLoggedIn: true
    //             })
    //         }
    //     }
    //     catch (error) {
    //         console.log('Error => ', error)
    //     }
        
    // }


    render(){
        return(
            <div className ='login'>
                <div className='container'>
                    <div className='row align-items-center my-5'>
                        
                        <form onSubmit={this.props.loginUser}>

                            <input type ='text' id='username' name='username'/>
                            <input type='text' id='name' name='name'/>
                            <input type='password' id='password' name='password'/>
                            <input type='submit' value='login' />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login