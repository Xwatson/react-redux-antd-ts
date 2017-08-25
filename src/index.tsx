import * as React from 'react'
import * as ReactDOM from 'react-dom'
import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'

const initialState = (window as any).___INITIAL_STATE__
const store: any = createStore(initialState)

const MOUNT_NODE: any = document.getElementById('root')

let render: () => void = (): void => {
    const routes = require('./routes/index').default(store)

    ReactDOM.render(
        <AppContainer store={store} routes={routes} />,
        MOUNT_NODE
    )
}

// 启用devTools工具
if (__DEV__) {
    if ((window as any).devToolsExtension) {
        (window as any).devToolsExtension.open()
    }
}

// 启用热更新
if (__DEV__) {
    if (module.hot) {
        // Development render functions
        const renderApp = render
        const renderError = (error: any) => {
            const RedBox = require('redbox-react').default

            ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
        }

        render = () => {
            try {
                renderApp()
            } catch (error) {
                renderError(error)
            }
        }

        // 设置热加载模块
        module.hot.accept('./routes/index', () =>
            setImmediate(() => {
                ReactDOM.unmountComponentAtNode(MOUNT_NODE)
                render()
            })
        )
    }
}

render()
