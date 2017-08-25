/**
 * Created by xwatson on 2016/12/8.
 */
import CoreLayout from '../layouts/CoreLayout'
import AuthLayout from '../layouts/AuthLayout'
import Home from './Home'
import ItemsRoute from './Items'

export const createRoutes = (store: any) => ([
    {
        path: '/',
        component: CoreLayout,
        indexRoute: Home,
        childRoutes: [
            ItemsRoute(store)
        ]
    }, {
        path: '/login',
        component: AuthLayout,
        childRoutes: [

        ]
    }
])

export default createRoutes
