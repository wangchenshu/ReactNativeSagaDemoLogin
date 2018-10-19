import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import I18n from 'react-native-i18n'

/*
const loginAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
});
*/
const loginAction = NavigationActions.back({
    key: 'LoginScreen'
})

export default class Home extends Component {
    render() {
        return (
            <View>
                <Text>{ I18n.t('welcome') }</Text>
            </View>
        )
    }
}