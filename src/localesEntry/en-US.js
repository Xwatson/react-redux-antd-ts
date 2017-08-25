import antdEn from 'antd/lib/locale-provider/en_US'
import appLocaleData from 'react-intl/locale-data/en'
import enMessages from '../../locales/en.json'

const appLocale = {
    messages: {
        ...enMessages
    },
    antd: antdEn,
    locale: 'en-US',
    data: appLocaleData
}

export default appLocale
