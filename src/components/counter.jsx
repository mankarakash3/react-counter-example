import React, { Component } from 'react';   

class Counter extends Component {
    
    render() { 
        const {counter} =  this.props;
         return (
            <div>
                <span className={[`badge m-2 badge-${counter.value === 0 ? 'warning' : 'primary'}`]}>{counter.value === 0 ? 'Zero' : counter.value}</span>
                <button 
                onClick={ () => this.props.onAdd(counter.id)}
                className="btn btn-secondary btn-sm">Increament
                </button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id)}  className="btn-danger btn-sm m-2">Delete</button>
            </div>
        );
        
    }

   
    
}
 
export default Counter;