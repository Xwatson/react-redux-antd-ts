/**
 * Created by xwatson on 2016/12/9.
 */
import * as React from 'react'
// import { message } from 'antd'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
// import auth from '../utils/Auth'
// import LoadingBar from '../components/LoadingBar'
// import LoadingSpin from '../components/LoadingSpin'
const config = require('../../config/config.json')

export interface AppContainerProps {
    routes: any,
    store: any
}
class AppContainer extends React.Component<AppContainerProps, {}> {
    static host = {
        BASE_API_URL: config[NODE_ENV.toUpperCase()].apiHost
    }
    shouldComponentUpdate(): boolean {
        return false
    }

    render(): any {
        const { routes, store } = this.props
        return (
            <Provider store={store}>
                <Router history={browserHistory} children={routes} />
                {/* <div style={{ height: '100%' }}>
                    <LoadingBar />
                    <LoadingSpin>
                        <Router history={browserHistory} children={routes} />
                    </LoadingSpin>
                </div> */}
            </Provider>
        )
    }
}
export default AppContainer
