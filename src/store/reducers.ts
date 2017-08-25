/**
 * Created by xwatson on 2016/12/9.
 */
import { combineReducers } from 'redux'
import locationReducer from './location'
// import actions from '../actions'

interface InjectReducerProps { key: string, reducer: any }

export const makeRootReducer = (asyncReducers?: any): any => {
    return combineReducers({
        location: locationReducer,
        // ...actions,
        ...asyncReducers
    })
}

export const injectReducer = (store: any, { key, reducer }: InjectReducerProps ) => {
    store.asyncReducers[key] = reducer
    store.replaceReducer(makeRootReducer(store.asyncReducers))
}
