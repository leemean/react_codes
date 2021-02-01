import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import { createStore } from 'redux'
//import reducer from "./reducer/counter"
//import { Provider } from 'react-redux'
//import { rootReducer } from "./reducer/index";

import TodoList  from "./TodoList";
 
//创建仓库
//const store = createStore(rootReducer)


// const render =  () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App
//         onIncrement = { ()=>{ store.dispatch({ type: "INCREMENT"}) } }
//         onDecrement = { () =>{ store.dispatch({ type: "DECREMENT" }) } }
//         value = { store.getState() }
//       />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

// render();

// store.subscribe(
//   render
// )



// ReactDOM.render(
//   <Provider store={ store }>
//     <App />
//   </Provider>,document.getElementById('root')
// )

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,document.getElementById('root')
)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
