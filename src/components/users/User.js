import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class User extends Component {
    render() {
        
        const {avatar_url, name, login, html_url} = this.props.user;

        return (
            <div>
                <div className="card">
                        <img className="card-img-top" src={avatar_url} alt=""/>{/* we can writ like {this.props.user.avatar_url} */}
                        <div className="card-body">
                            <h4 className="card-title">{name}</h4>
                            <p className="card-text">
                                <Link to={'/users/'+login} className="btn btn-success">{login}</Link><br/>
                                <a href={html_url} className="btn btn-warning">Show More</a>
                            </p>
                        </div>
                    </div>
            </div>
        )
    }
}

export default User
