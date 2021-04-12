import React, { Component } from 'react'
import Al_assar from './Al_assar'
import axios from 'axios';


export class Al_3ossor extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             al_assar : [
                  {assar : 'jahili',
                   id    : 0
                   }, 
                   {assar : 'abassi',
                   id    : 1
                   },
                   {assar : 'otmani',
                   id    : 2
                   }, 
                   {assar : 'ayoubi',
                   id    : 3
                   }, 
             ]
        }
    }



    getAl_3ossor = () => {
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





    render() {
        return (
            <div>
                <div className="row"> {/* row gerale .row  */}
                    
                    {this.state.al_assar.map(al_assar => (
                       <div className="col-md-3" key={al_assar.id}>
    
                        <Al_assar al_assar={al_assar} />
                       </div>
                    ))}
                    </div>
            </div>
        )
    }
}

export default Al_3ossor
