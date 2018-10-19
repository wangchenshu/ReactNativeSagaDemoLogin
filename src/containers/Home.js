import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import I18n from 'react-native-i18n'

const loginAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
});

export default class Home extends Component {
    render() {
        return (
            <View>
                <Text>{ I18n.t('welcome') }</Text>
                <Button
                    title={ I18n.t('back') }
                    containerViewStyle={{
                        marginTop: 20
                    }}
                    onPress={() => this.props.navigation.dispatch(loginAction)}
                />
            </View>
        )
    }
}