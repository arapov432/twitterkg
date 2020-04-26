import React, { Component } from 'react'

export class Public extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstName: ''
        }
    }
    submitHandler=(event)=>{
        event.preventDefault();
        alert("You submitted your name as " +this.state.firstName);
    }
    myChangeHandler=(event)=>{
        this.setState({firstName: event.target.value});
    }
    
    render() {
        return (
        
            <div className="row">
                <div className="col-lg-6 textcenter">
                <h1>This is public Pages</h1>
                <p> In this blog, we will learn about how to create a live<br/>
                search input field, which fetches the result as the user <br/>
                types in the query. Of all the results available for that<br/>
                query, we will only fetch 20 results. We will create a <br/>
                pagination for the user to navigate to the next or previous<br/>
                20 results, until no further results are available.
                </p>
                <form onSubmit={this.submitHandler}>
                    <h1>Your name is here {this.state.firstName}</h1>
                    <p>Enter your name and submit</p><br/>
                    <input type="text" onChange={this.myChangeHandler}></input>
                    <input type="submit"></input>
                </form>
                </div>
                <div className="col-lg-6 textcenter">
                <h1>This is public Pages</h1>
                <p> In this blog, we will learn about how to create a live<br/>
                search input field, which fetches the result as the user <br/>
                types in the query. Of all the results available for that<br/>
                query, we will only fetch 20 results. We will create a <br/>
                pagination for the user to navigate to the next or previous<br/>
                20 results, until no further results are available.
                </p></div>
            </div>
        )
    }
}

export default Public
