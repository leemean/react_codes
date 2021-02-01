import React,{ Component } from 'react'
import 'antd/dist/antd.css'
import { Input,Button,List } from 'antd'
import store from './store/index'

class TodoList extends Component {

    constructor(props){
        super(props)
        this.state = store.getState()
        console.log(this.state)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e){
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
        console.log(e.target.value)
    }

    render(){
        return (
            <div>
                <div style={{ marginTop: '10px',marginLeft: '10px' }}>
                    <Input 
                        value={this.state.inputValue} 
                        placeholder='todo info' 
                        style={{ width: '300px' }}
                        onChange={ this.handleInputChange }    
                    ></Input>
                    <Button type="primary">提交</Button>
                </div>
                <List 
                    style={{ marginTop: '10px', width: '300px' }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
}

export default TodoList