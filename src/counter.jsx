import React  from "react";
export default class Counter extends React.Component{
    constructor()
    {
        super()
        this.state={
            count:0
        };
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })
    }
    decrement(){
        this.setState({
            count:this.state.count-1
        })
    }
    render()
    {
        return(
            <>
            <h1>Counter App</h1>
            <p>Count: {this.state.count}</p>
            <button onClick={()=>this.increment()}>Increment</button>
            <button onClick={()=>this.decrement()}>Decrement</button>
            </>
        )
    }
}