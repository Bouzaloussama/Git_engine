import React, { Component } from 'react'
import User from './User';
import axios from 'axios';
export class UserRepos extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             repos : [
                 { 
                    id : 0,
                    name : '',
                    
                 }
             ],
        }
    }
    
    
    componentWillMount() {
        const login = this.props.match.params.login;
        axios.get(`https://api.github.com/users/${login}/repos`)
        .then(res =>{
            this.setState({
                repos : res.data,
            })
        })
    }

    render() {
        return (
            <div>
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

export default UserRepos
