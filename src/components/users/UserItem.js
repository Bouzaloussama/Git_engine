import axios from 'axios';
import React, { Component } from 'react'
import User from './User';

class UserItem extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             repos : [
                 { 
                    id : 0,
                    name : '',
                    
                 }
             ],
             user :{},
        }
    }
    
    
    
    componentWillMount() {
        const login = this.props.match.params.login;
        axios.get(`https://api.github.com/users/${login}`)
        .then(res =>{
            this.setState({
                user : res.data
            })
        })

        axios.get(`https://api.github.com/users/${login}/repos`)
        .then(res =>{
            this.setState({
                repos : res.data,
            })
        })
    }

    render() {
        const {user} = this.state;
        return (
            <div>
                <div>
                <User user={user}/>
                </div>

                <div className="row"> {/* row gerale */}
                {this.state.repos.map(user => (
                   <div className="col-md-3" key={user.id}>

                    <User user={user} />
                   </div>
                ))}
                </div>
            </div>
        )
    }
}

export default UserItem
