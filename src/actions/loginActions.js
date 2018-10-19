import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
    loginRequest: ['email', 'password'],
    loginSuccess: ['user'],
    loginFailure: ['error'],
    logout:[]
})

export default Creators;