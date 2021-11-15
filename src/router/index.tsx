import { BrowserRouter, Route, Link } from "react-router-dom";
import { IRoute } from './type'
import routers from "./menu"
import { Component } from 'react';

// 生成菜单
const makeLink = (routers: Array<IRoute>) => {
  return (
    <div className="menus">
      <ul>
      {routers.map((val: IRoute) => {
          return <li key={val.path}>
            <Link to={val.path} className={ val.className || ''}>{val.name}</Link>
            { val.child !== undefined && val.child.length > 0 ? makeLink(val.child) : null }
          </li>;
        })}
      </ul>
    </div>);
}

// 生成路由
const makeRoute = (routers: Array<IRoute>) => {
  return routers.map((val: IRoute) => {
    return <div key={val.path}>
        <Route path={val.path} exact>{val.component}</Route>
      { val.child !== undefined && val.child.length > 0 ? makeRoute(val.child) : null }
    </div>
  })
}


// const RouterContent: any = () => {
//   return <BrowserRouter>
//     <ul>
//       { makeLink(routers)}
//     </ul>
//     { makeRoute(routers)}
//     </BrowserRouter>
// };

class RouterContent extends Component {
  render() {
    return <BrowserRouter>
    <ul>
      { makeLink(routers)}
    </ul>
    { makeRoute(routers)}
    </BrowserRouter> 
  }
}

export default RouterContent;
