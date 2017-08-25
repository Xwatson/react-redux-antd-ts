/**
 * Created by xwatson on 2016/12/28.
 */
import * as React from 'react'
import { browserHistory } from 'react-router'
import { addLocaleData } from 'react-intl'
import enUS from '../../localesEntry/en-US'
import zhCN from '../../localesEntry/zh-CN'
import * as moment from 'moment'
moment.locale('en')
addLocaleData(zhCN.data)

export interface BaseLayoutStatus {
    locale: any
}
export default class BaseLayout<T> extends React.Component<T, BaseLayoutStatus> {
    constructor(props: any) {
        super(props)
        this.changeLocale = this.changeLocale.bind(this)
        this.state = {
            locale: zhCN
        }
    }
    public changeLocale(e?: any): void {
        const localeValue = e.target.value
        this.setState({ locale: localeValue })
        if (localeValue.locale === 'zh-CN') {
            moment.locale('zh-cn')
            addLocaleData(zhCN.data)
        } else if (localeValue.locale === 'en-US') {
            moment.locale('en')
            addLocaleData(enUS.data)
        }
        browserHistory.replace(browserHistory.getCurrentLocation())
    }
}
