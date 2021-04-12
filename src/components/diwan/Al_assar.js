import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class Al_assar extends Component {
    render() {
        const {assar} = this.props.al_assar;
        return (
            <div>
                <div className="card">
                        <img className="card-img-top" src="" alt=""/>{/* we can writ like {this.props.user.avatar_url} */}
                        <div className="card-body">
                            <h4 className="card-title">{assar}</h4>
                            <p className="card-text">
                                <Link to={'/diwan'+assar} className="btn btn-success">{assar}</Link><br/>
                                
                            </p>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Al_assar
