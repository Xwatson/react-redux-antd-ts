/**
 * Created by xwatson on 2016/12/12.
 */
import { injectReducer } from '../../store/reducers'

export default (store: any) => ({
    path: 'items(/:id)',
    getComponent(nextState: any, cb: any) {
        require.ensure([], (require: any) => {
            const Items = require('./containers/ItemsContainer').default
            const reducer = require('./modules/items').default
            injectReducer(store, { key: 'Items', reducer })
            cb(null, Items)
        })
    }
})
