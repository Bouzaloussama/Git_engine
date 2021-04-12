import React, { Component } from 'react'
import axios from 'axios';
import User from './User'
import SearchUsers from './SearchUsers';

export class Users extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users : [
                 {
                    login : 'oussama', 
                    id : 0,
                    avatar_url : '',
                    
                 }
             ]
        }
    }
    
    getUsers = () => {
        axios.get('https://api.github.com/users')
        .then(response => {
            this.setState({
                users : response.data
            })
        })
    }

    componentDidMount() {
        this.getUsers();
    }

    searchUsersFromGit=(data) =>{

        if(data !=''){
            if(data[0] != 'R'){

                axios.get(`https://api.github.com/search/users?q=${data}`)
                .then(responce => {
                    this.setState({
                        users : responce.data.items
                    })
                })
            }else{

                data = data.substring(1);
                axios.get(`https://api.github.com/search/repositories?q=${data}`)
                .then(responce => {
                    this.setState({
                        users : responce.data.items
                    })
                })
            }
           
        }
    }


    render() {
        return (
            <div>
                <div className="row my-2"> {/* how to genere this row ".row>.col-md-12" */}
                    <div className="col-md-12">
                        <SearchUsers getUserSearch={this.searchUsersFromGit}/>
                    </div>
                </div>
                <div className="row"> {/* row gerale */}
                {this.state.users.map(user => (
                   <div className="col-md-3" key={user.id}>

                    <User user={user} />
                   </div>
                ))}
                </div>
            </div>
        )
    }
}

export default Users
