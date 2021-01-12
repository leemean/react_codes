import React from 'react'
import './Square.css';

// class Square extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             value: null
//         }
//     }

//     render(){
//         return (
//         <button className="square" onClick={ ()=> this.props.onClick() }>
//             {this.props.value}
//         </button>
//         );
//     }
// }


const Square = (props) => {
    return (
        <button className="square" onClick={ ()=> props.onClick() }>
            {props.value}
        </button>
    );
}

export default Square;
