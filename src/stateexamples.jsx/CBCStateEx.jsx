import React,{Component } from 'react'
 class CBCStateEx extends Component {
    constructor (){
        super();
        this.state ={
            username:"prasoon"
        };
    }
    changeName=()=>{
        this.setState({username:"jon is present"});
    }
    render(){
        console.log(this);
        return(
            <div>CBCStateEx
                <h1>{this.state.username}</h1>
                <button onClick={this.changeName}>Update the state</button>
            </div>
        )

    }
 }
 export default CBCStateEx
