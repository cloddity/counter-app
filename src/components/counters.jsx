import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 1},
            {id: 3, value: 2},
            {id: 4, value: 3},
        ]
    }; 
    render() { 
        console.log(this.props);
        return (
            <div>
                {this.props.children}
                {this.state.counters.map(counter => (
                    <Counter key={counter.id} value={counter.value}>
                        <h4> Counter #{counter.id} </h4>
                    </Counter>
                ))}
            </div>
        );
    }
}
 
export default Counters;