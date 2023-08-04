import React, { useEffect } from 'react';
// import { useState } from 'react';
import './styles.scss';
class Counter extends React.Component {
    constructor(){
        super();
        this.state= {
            count:1
        }
        
    }
   increment = () => {
    this.setState({ count :this.state.count + 1});
    };
    decrement = () => {
        this.setState({ count: this.state.count - 1});
        };
      
  
   
    render(){
        return(
            <div className='app'>
              <div className='text'>{this.state.count}</div>
              <button onClick={this.increment}  className='button'>+</button>
              <button onClick={this.decrement} className='button'>-</button>
            </div>
        )
    }
}
export default Counter 