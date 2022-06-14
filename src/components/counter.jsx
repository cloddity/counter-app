import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value: this.props.value,
        tags: []
        //imageUrl: 'https://picsum.photos/200'
    }; 

    styles = {
        fontSize: '10px',
        fontWeight: 'bold'
    };

    // renderTags() {
    //     if (this.state.tags.length === 0 ) return <p>There are no tags!</p>;
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>;
    // }

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () => {
        //console.log(product);
        //console.log('Increment clicked', this);
        this.setState({value: this.state.count + 1});
    }

    render() { 
        console.log('props', this.props);
        return (
        <div>
            {this.props.children}
            <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
            <button 
                onClick={this.handleIncrement}
                className="btn btn-secondary btn-sm"
            >
                Increment
            </button>
        </div>
        );
    }

    // {this.state.tags.length === 0 && "Please create a new tag!"}
    // {this.renderTags()}

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;