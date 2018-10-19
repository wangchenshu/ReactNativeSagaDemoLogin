import React from 'react'
import {
    ScrollView,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Navigator
} from 'react-native'

import {
    FormLabel,
    FormInput,
    Button,
} from 'react-native-elements';
import { NavigationActions, StackActions } from 'react-navigation';
import I18n from 'react-native-i18n'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators } from '../actions/loginActions';

/*
const homeAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
});
*/
const homeAction = NavigationActions.navigate({
    routeName: 'HomeScreen',
    params: {},
    action: NavigationActions.navigate({ routeName: 'HomeScreen'})
})

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            localLanguage: I18n.locale
        }
    }

    componentWillReceiveProps(newProps) {
        this.forceUpdate()
        if (!newProps.login.fetching) {
            if (newProps.login.loggedIn) {
                this.props.navigation.dispatch(homeAction);
            }
        }
    }

    render() {
        return (
            <View>
                <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                </View>
                <FormLabel>{ I18n.t('email') }</FormLabel>
                <FormInput
                    ref="1"
                    keyboardType='email-address'
                    returnKeyType='next'
                    placeholder={ I18n.t('inputEmail') }
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(email) => this.setState({ email })}
                    onSubmitEditing={() => this.focusNextField('2')}
                    value={this.state.email}
                />
                <FormLabel>{ I18n.t('password') }</FormLabel>
                <FormInput
                    ref="2"
                    secureTextEntry={true}
                    returnKeyType='go'
                    placeholder={ I18n.t('inputPassword') }
                    onChangeText={(password) => this.setState({ password })}
                    onSubmitEditing={() => this.pressLogin()}
                    value={this.state.password}
                />
                <Button
                    raised
                    underlayColor={'#eee'}
                    backgroundColor={'#0099cc'}
                    textStyle={{ textAlign: 'center' }}
                    title={ I18n.t('login') }
                    containerViewStyle={{marginTop: 20}}
                    onPress={() => this.pressLogin()}
                />
                <Button
                    raised
                    underlayColor={'#eee'}
                    backgroundColor={'#0099cc'}
                    textStyle={{ textAlign: 'center' }}
                    title={ I18n.t('logout') }
                    containerViewStyle={{marginTop: 20}}
                    onPress={() => this.props.actions.logout()}
                />
                <Button
                    raised
                    underlayColor={'#eee'}
                    backgroundColor={'#0099cc'}
                    textStyle={{ textAlign: 'center' }}
                    title={ I18n.t('changeToEnglish') }
                    containerViewStyle={{marginTop: 20}}
                    onPress={()=>{I18n.locale = 'en',this.setState({localLanguage: 'en'})}}
                />
                <Button
                    raised
                    underlayColor={'#eee'}
                    backgroundColor={'#0099cc'}
                    textStyle={{ textAlign: 'center' }}
                    title={ I18n.t('changeToChinese') }
                    containerViewStyle={{marginTop: 20}}
                    onPress={()=>{I18n.locale = 'zh-TW',this.setState({localLanguage: 'zh-TW'})}}
                />
                <Text>{(this.props.login.loggedIn == true) ? I18n.t('loginSuccess') : I18n.t('loginAgain')}</Text>
            </View>
        )
    }

    pressLogin() {
        const { email, password } = this.state
        this.props.actions.login(email, password)
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        margin: 20,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#406E9F',
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

const mapStateToProps = state => {
    return {
      login: {
        loggedIn: state.login.loggedIn,
        fetching: state.login.fetching,
        server: state.login.server
      }
    }
  }

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        login: (email, password) => Creators.loginRequest(email, password),
        logout: () => Creators.logout()
    }, dispatch),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Login)