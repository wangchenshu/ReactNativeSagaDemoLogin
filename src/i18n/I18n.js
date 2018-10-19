// @flow

import I18n from 'react-native-i18n'

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

// English language is the main language for fall back:
I18n.translations = {
    en: require('./languages/english.json')
}

let languageCode = I18n.locale.substr(0, 2)

// All other translations for the app goes to the respective language file:
console.log('language');
console.log(languageCode);
switch (languageCode) {
    case 'zh':
        var deviceLocale = I18n.locale;
        if (deviceLocale.indexOf('zh-Hant') >= 0 || deviceLocale.indexOf('zh-TW') >= 0) {
            I18n.translations.zh = require('./languages/zh-Hant.json');
        }
        else {
            I18n.translations.zh = require('./languages/zh-Hans.json');
        }
        break
}
