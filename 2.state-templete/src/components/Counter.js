import React, { Component } from 'react';
import {Box, Button} from '@material-ui/core';

class Counter extends Component {
  state = {
    count : 5,    
  }

  incremenet() {
    this.setState(
      {count : this.state.count + 1,
      } )
  }

  decremenet() {
    this.setState(
      {count : this.state.count - 1,
      } )
  }

  render() {
    return (
      <div>
        <Button variant='contained' color='primary' size='large' onClick={this.incremenet.bind(this)} >+</Button>
        <Box component='span'm={5} > {this.state.count} </Box>
        <Button variant='contained' color='primary' size='large'  onClick={this.decremenet.bind(this)}>-</Button>
      </div>
    );
  }
}

export default Counter;