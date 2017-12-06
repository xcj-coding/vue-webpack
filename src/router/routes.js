const HelloWorld = () => import('@/pages/HelloWorld')
const PageOne = () => import('@/pages/PageOne')
const NotFound = () => import('@/pages/NotFound')
const Home = () => import('@/pages/Home')

export const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/page_one',
    name: 'PageOne',
    component: PageOne
  },
  {
    path: '/not_found',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '*',
    redirect: '/not_found'
  }
]
