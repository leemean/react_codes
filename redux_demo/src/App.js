import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
//import { increment,decrement} from './actions/counter'
import React from 'react'

import * as counterActions from './actions/counter'
import { bindActionCreators } from 'redux'

class App extends React.Component {

  render(){
    //const { increment,decrement } = this.props

    return (
      <>
        <div>
          <h1>{this.props.counter}</h1>
          <p>
            {/* <button onClick={ props.onIncrement } >增加</button>
            <button onClick={ props.onDecrement } >减少</button> */}
            {/* <button onClick = { () => { increment() } } >增加</button>
            <button onClick = { () => { decrement() } }>减少</button> */}
            <button onClick = { () => this.props.counterActions.increment(10) }>增加</button>
            <button onClick = { () => this.props.counterActions.decrement(10) }>减少</button>
          </p>
        </div>
      </>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    counter:state.counter
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {
//       dispatch(increment())
//     },
//     decrement: () => {
//       dispatch(decrement())
//     }
//   }
// }


const mapDispatchToProps = (dispatch) => {
  return {
    counterActions: bindActionCreators(counterActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
