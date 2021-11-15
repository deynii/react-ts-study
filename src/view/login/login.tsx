import { Component } from "react";
import { Button, Form, Input, message } from 'antd'
import { Fragment } from 'react'
import "../../assert/css/login.css"
import store from "../../store";
import { Redirect } from "react-router";

const BodyForm: any = ( props: any) => {
  return (<Fragment>
    <div className="container">
      <div className="loginHeader"></div>
      <div className="lofinForm">
        <Form
          name="login"
          autoComplete='false'
          // onFieldsChange={props.formChange}
          onFinish={ props.handleClick }
        >
          <Form.Item label="账号" name="username">
            <Input value={props.state.username} placeholder="请输入登陆用户账号" required={ true }/>
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input.Password value={props.state.password} placeholder="请输入登陆密码" required={ true}/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" >登陆</Button>
          </Form.Item>
          </Form>
      </div>
    </div>
  </Fragment>);
}

class Login extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      username: 'admin',
      password: 'admin'
    };
    this.handleClick = this.handleClick.bind(this)
    // this.handleFormChange = this.handleFormChange.bind(this)
    
  }
  render() {
    return <BodyForm state={this.state} handleClick={this.handleClick} formChange={ this.handleFormChange} />
  }
  handleClick(values: any) {
    const layerHide = message.loading(`登陆中...`);
    setTimeout(() => {
      layerHide();
      if (values.username === 'admin' && values.password === 'admin') {
        message.success(`登陆成功`)
        store.dispatch({ type: `LOGIN_SUCCESS` })
        return <Redirect to="/"></Redirect>
      } else {
        message.error(`登陆失败，请重新输入`)
      }
    }, 2000)
  }

  handleFormChange(e: any) {
    const field = e[0],
      name = field.name[0];
    const state: any = Object.assign({}, this.state);
    state[name] = field.value;
    this.setState(state);
  }
}

export { Login };
