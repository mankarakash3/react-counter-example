import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters : [
           {id : 1, value:4},
           {id : 2, value:0},
           {id : 3, value:0},
           {id : 4, value:0},
           {id : 5, value:0}
        ]
     };

     handleDelete = CounterId  => {
         const counters =this.state.counters.filter(c => c.id !== CounterId);
         this.setState({ counters });
        // console.log("Called Delete",CounterId);
         //console.log("Called Delete",CounterId);
     }; 

     reset = () => {
         this.setState({counters: [
            {id : 1, value:4},
            {id : 2, value:0},
            {id : 3, value:0},
            {id : 4, value:0},
            {id : 5, value:0},
         ]});
     }

     add = (id) => {
        let counters = this.state.counters;
        counters.map( counter => {
            if(counter.id === id) {
                counter.value ++;
            }
            return counter;
        });
        this.setState({counters: counters});
     }


    render() { 
        return (
        <div>
            <h2>React Counter demo </h2>
            <button onClick={this.reset}  className="btn-sm m-2">Reset</button>
            {this.state.counters.map(counter => <Counter onDelete={this.handleDelete} 
            key={ counter.id} 
            counter={counter}
            onAdd={this.add}
            />)}
            <h4></h4>
        </div>);
    }
}
 
export default Counters;