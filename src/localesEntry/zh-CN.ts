import appLocaleData from 'react-intl/locale-data/zh'

const appLocale = {
    messages: {
        ...require('../../locales/zh.json')
    },
    antd: null,
    locale: 'zh-CN',
    data: appLocaleData
}

export default appLocale
