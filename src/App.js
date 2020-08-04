import React, { Component } from 'react';
import {Button,message} from 'antd'

class App extends Component {
    handleClick=()=>{
        message.success("成功了。。。")
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.handleClick}>学习</Button>
            </div>
        );
    }
}

export default App;