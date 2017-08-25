import { ItemsStates, ItemsModel } from './../components/Items';
/**
 * Created by xwatson on 2016/12/9.
 */

export const ITEM_REQUIRE: string = 'ITEM_GET_ALL'
export type ITEM_REQUIRE = typeof ITEM_REQUIRE

export const ITEM_RECEIVE: string = 'ITEM_RECEIVE'
export type ITEM_RECEIVE = typeof ITEM_RECEIVE

export interface InitItems {
    type: ITEM_REQUIRE
    payload?: any
}
export interface ReceiveItems {
    type: ITEM_RECEIVE
    payload?: any
}
export type ItemsActions = InitItems | ReceiveItems

export function initItems(): InitItems {
    return {
        type: ITEM_REQUIRE
    }
}
export function receiveItems(date: Array<ItemsModel> = []): ReceiveItems {
    return {
        type: ITEM_RECEIVE,
        payload: {
            tableDate: date
        }
    }
}
export function fetchItems(): any {
    return (dispatch: any, getState: any) => {
        if (getState().items.fetching) {
            return
        }
        // 发起请求
        dispatch(initItems())
        // 模拟请求
        setTimeout(
            () => {
                let data: Array<ItemsModel> = [{
                    key: '1',
                    name: '胡彦斌',
                    age: 32,
                    address: '西湖区湖底公园1号'
                }, {
                    key: '2',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号'
                }]
                dispatch(receiveItems(data))
            }, 
            2000)
    }
}

const ACTION_HANDLERS = {
    [ITEM_REQUIRE]: (state: ItemsStates, action: ItemsActions) => {
        return ({ ...state, fetching: true })
    },
    [ITEM_RECEIVE] : (state: ItemsStates, action: ItemsActions) => {
        return ({ ...state, fetching: false, data: action.payload.tableDate })
    }
}

const initialState = {
    fetching: false,
    data: []
}
export default function itemsReducer(state: ItemsStates = initialState, action: ItemsActions) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
