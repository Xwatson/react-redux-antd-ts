import antdEn from 'antd/lib/locale-provider/en_US'
import appLocaleData from 'react-intl/locale-data/en'

const appLocale = {
    messages: {
        ...require('../../locales/en.json')
    },
    antd: antdEn,
    locale: 'en-US',
    data: appLocaleData
}

export default appLocale
