import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'
import AllGamers from './AllGamers'
import Login from './Login'
import SignUp from './SignUp'
import NewUser from './NewUser'
import Profile from './Profile'
import Logout from './Logout'

let baseURL = 'http://localhost:3003'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      username: '',
      password: '',
      name: '',
      userLoggedIn: false,
    }
  }


getUsers = () => {
  // fetch from the backend
  fetch(baseURL + '/users', {
    credentials: 'include'
  })
  .then(res => {
    if(res.status === 200) {
      return res.json()
    } else {
      return []
    }
  })
}

// login 
loginUser = async (e) => {
    console.log('loginUser')
    e.preventDefault()

    const url = baseURL + '/users/login'
    const loginBody = {
        username: e.target.username.value,
        password: e.target.password.value,
        name:e.target.name.value
      
    }
    try {

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(loginBody),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })

        console.log(response)
        console.log(response.body)
        console.log('BODY: ', response.body)

        if(response.status === 200) {
            this.getUsers()
            console.log('🌈 login successful!🌈')
            this.setState({
                username: e.target.username.value,
                password: e.target.password.value,
                userLoggedIn: true
            })
            console.log(this.state)
        }
    }
    catch (error) {
        console.log('Error => ', error)
    }

}
getGamers = () => {
  fetch(baseURL + '/users', {
    credentials: 'include'
  })
  .then(response => {
    if (response.status === 200) {
      return response.json()
    } else {
      return []
    }
    }) 
  .then(data => {
    console.log(data)
    this.setState({
      users: data
    })
  })
  console.log()
}
  getUserById = (id) => {
    fetch(this.props.baseURL + '/users/' + id,  {
      credentials: 'include'
    })
    .then(response => {
      const user = this.state.users.find(user => user._id === id)
      if (response.status === 200) {
        console.log(response)
        return user
      } else {
        return []
      }
      }) 
    .then(data => {
      console.log(data)
      this.setState({
        users: data
      })
    })
  }


  addGamer = (newGamer) => {
    const copyGamers = [...this.state]
    copyGamers.push(newGamer)
    this.setState({
      users: copyGamers
    })
  }

  componentDidMount(){
    this.getGamers()
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
        <Navigation username={this.state.username} userLoggedIn={this.state.userLoggedIn}/>
          <Switch>
            <Route path="/about" exact component={() => <About />} />
            <Route path="/signup" exact component={() => <SignUp />} />
            <Route path="/login" exact component={() => <Login loginUser={this.loginUser}/>} />
            <Route path="/logout" exact component={() => <Logout />} />
            <Route path="/gamers" exact component={() => <AllGamers users={this.state.users}/>} />
            <Route path="/profile/:id" exact component={() =>   <Profile profiles={this.state.users} /> }/>  
         
          </Switch>
          {/* <Profile profile={this.state.gamers} baseURL={baseURL} getUserById={this.getUserById}/>} /> */}
        </Router>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;