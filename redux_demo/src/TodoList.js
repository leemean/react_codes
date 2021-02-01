import React,{ Component } from 'react'
import store from './store/index'
import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM } from "./store/actionTypes";
import { getInputChangeAction,getAddItemAction,getDeleteItemAction } from "./store/actionCreator";
import TodoListUI from './TodoListUI'

class TodoList extends Component {

    constructor(props){
        super(props)
        this.state = store.getState()
        console.log(this.state)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    handleInputChange(e){
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState())
    }

    handleBtnClick(){
         const action = getAddItemAction()
         store.dispatch(action)
    }

    handleItemDelete(index){
        const action = getDeleteItemAction(index)
        store.dispatch(action)
        console.log('delete:'+index)
    }

    render(){
        return (
            // <div>
            //     <div style={{ marginTop: '10px',marginLeft: '10px' }}>
            //         <Input 
            //             value={this.state.inputValue} 
            //             placeholder='todo info' 
            //             style={{ width: '300px' }}
            //             onChange={ this.handleInputChange }    
            //         ></Input>
            //         <Button type="primary" onClick={ this.handleBtnClick }>提交</Button>
            //     </div>
            //     <List 
            //         style={{ marginTop: '10px', width: '300px' }}
            //         bordered
            //         dataSource={this.state.list}
            //         renderItem={(item,index) => (<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
            //     />
            // </div>
            <TodoListUI 
                inputValue={this.state.inputValue} 
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                list={this.state.list}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }
}

export default TodoList