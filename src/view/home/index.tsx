import { Component } from "react";
import store from '../../store';

class Home extends Component<any, any> {
  constructor(props: any) {
    super(props)
    const pageStore = store.getState().page
    this.state = {
      title: pageStore.title
    }

    store.subscribe(() => {
      const state = store.getState().page;
      this.setState({
        title: state.title
      })
    })
  }

  render() {
    return (<div>
      <span onClick={ () => this.changeTitle() } >{ this.state.title }</span>
    </div>)
  }
  changeTitle() {
    store.dispatch({
        type: 'change_title',
        action: '',
        title: '随机数为: ' + Math.floor(Math.random() * 1000000)
      })
  }
}

export default Home;


