import React, { Component } from 'react'

export class SearchUsers extends Component {

    state ={
        search : '',
        searchRe : ''
    }

    handlForm = (e) =>{
        this.setState({
            search : e.target.value
        })
    }

    handlForm1 = (e) =>{
        this.setState({
            searchRe : e.target.value
        })
    }

    searchUsers = (e) =>{
        e.preventDefault();
        if (this.state.search != '') {
        this.props.getUserSearch(this.state.search)
        }else{
            this.props.getUserSearch('R'+this.state.searchRe)
        }
    }

    render() {

        const {search, searchRe} = this.state;
        return (
            <div>
                <form onSubmit={this.searchUsers}>
                    <div className="form-group">
                        <label htmlFor="search"></label>
                        <input onChange={this.handlForm} value={search} placeholder='Search users ...' id="search" type="text" className=""/>
                    </div>

                    <button className="btn btn-danger">Search</button>
                </form>

                <form className="form-inline my-2 my-lg-0" onSubmit={this.searchUsers} >
                        <input onChange={this.handlForm1} value={searchRe} placeholder='Search reposetorie ...' id="search" className="" type="text"/>
                        <button className="btn btn-outline-success my-0 my-sm-0" type="submit">Search</button>
                </form>

                
            </div>
        )
    }
}

export default SearchUsers
