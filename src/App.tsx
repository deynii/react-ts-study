import { Component, Fragment } from 'react';
import './App.css';
import store from './store';
import { PageState} from './store/page/types'
import RouterContent from './router'
import { Login } from './view/login/login'
import { Button } from 'antd';

class Layout extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { isLogin: store.getState().app.isLogin }
    store.subscribe(() => {
      this.setState({
        isLogin: store.getState().app.isLogin
      })
    })
    // 退出登陆
    this.logout = this.logout.bind(this)
  }
  render() {
    return this.state.isLogin ?
    (
      <Fragment>
        <div>header</div>
        <RouterContent />
          <div>
            <Button type="primary" danger onClick={ this.logout } >退出登陆</Button>
        </div>
      </Fragment>
    )
    : (
        <Fragment>
          <Login />
        </Fragment>
    )
  }

  logout() {
    store.dispatch({type: `LOGOUT`})
  }
}

class App extends Component<any, any> {
  constructor(props: any) {
    super(props)
    const pageStore = store.getState()
    this.state = {
      title: pageStore.page.title || ''
    } as PageState
  }
  render() {
    return <Layout />
  }
  change() {
    store.dispatch({
      type: 'change_title',
      action: '',
      title: '哈哈' + Math.random()
    })
  }
}

export default App;
