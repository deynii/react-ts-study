import About from '../view/about'
import Users from '../view/users'
import HomeChild from '../view/home/child'
import Home from '../view/home'
import { IRoute } from './type'

const routers: Array<IRoute> = [
  {
    path: '/home',
    name: 'home',
    className: 'active',
    component: <Home />,
    child: [
      {
        path: '/home/child',
        name: 'home child',
        component: <HomeChild />,
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: <About />,
  },
  {
    path: '/users',
    name: 'users',
    component: <Users />,
  },
]
export default routers;