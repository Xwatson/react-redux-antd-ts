
interface UpdateLocationProps { dispatch: any }
// ------------------------------------
// Constants
// ------------------------------------
export const LOCATION_CHANGE = 'LOCATION_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function locationChange(location: string = '/') {
    return {
        type: LOCATION_CHANGE,
        payload: location
    }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }: UpdateLocationProps) => {
    return (nextLocation:any) => dispatch(locationChange(nextLocation))
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState: any = null
export default function locationReducer(state: any = initialState, action: any) {
    return action.type === LOCATION_CHANGE ? action.payload : state
}
