/**
 * Created by xwatson on 2016/12/9.
 */
import './HomeView.scss'
import * as React from 'react'
import { FormattedMessage } from 'react-intl'

enum Test {
    a = '1',
    b = 2,
    c = 2
}
export class HomeView extends React.Component<{}, {}> {
    render() {
        const tt: Test = Test.a
        console.log(tt)
        return (
            <div>
                <h3><FormattedMessage id="Home.Welcome" defaultMessage="欢迎！" /></h3>
            </div>
        )
    }
}

export default HomeView
