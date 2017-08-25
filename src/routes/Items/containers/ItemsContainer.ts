import { ItemsStates } from './../components/Items';
/**
 * Created by xwatson on 2016/12/9.
 */
import { connect, Dispatch } from 'react-redux'
import * as actions from '../modules/items'

import Items from '../components/Items'

const mapDispatchToProps = (dispatch: Dispatch<actions.ItemsActions>) => {
    return {
        fetchItems : () => dispatch(actions.fetchItems()),
    }
}

const mapStateToProps = ({ data }: ItemsStates) => ({
    data
})

export default connect(mapStateToProps, mapDispatchToProps)(Items)
