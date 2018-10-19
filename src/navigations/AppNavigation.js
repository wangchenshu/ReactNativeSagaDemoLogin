import I18n from 'react-native-i18n'
import { StackNavigator } from 'react-navigation'
import HomeScreen from '../containers/Home'
import LoginScreen from '../containers/Login'
import styles from './styles/NavigationStyles'

const PrimaryNav = StackNavigator({
    HomeScreen: { 
        screen: HomeScreen,
        navigationOptions: { title: I18n.t('home') }
    },
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: { title: I18n.t('login') }
    }
}, {
        headerMode: 'screen',
        initialRouteName: 'LoginScreen',
        navigationOptions: {
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerBackTitleStyle: styles.headerTitle,
        }
    })

export default PrimaryNav
