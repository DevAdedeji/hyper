import axios from 'axios';
const link = 'https://compaym.herokuapp.com/api/register';
const state = { 
    userInfo:{
        firstName: '',
        surname: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    },
    username_exist: false,
    loading: false,
    signUpText: true,
    userRegistrationSuccessful: false,
};

const getters = {
    userInfo: (state) => {state.userInfo},
    userExist: (state) => state.username_exist,
    currentlyLoading: (state) => state.loading,
    signUpText: (state) => state.signUpText,
    userRegistration: (state) => state.userRegistrationSuccessful,
};

const actions = {
    async createUser({commit, state}, userInfo){    
        commit('signingUp', true);
        commit('textLoading', false);
        await axios.post(link, {
            "first_name": `${userInfo.firstName}`,
            "last_name": `${userInfo.surname}`,
            "email": `${userInfo.email}`,
            "username": `${userInfo.username}`,
            "password": `${userInfo.password}`
        })
        .then(response =>{
            if (response.status >= 201 <= 299){
                commit('userRegistration', true)
            }
            commit('newUser', response);
        })
        .catch((err)=>{
            if(err.response.status >= 400 && err.response.status <= 499){
                userInfo.firstName = '';
                userInfo.surname = '';
                userInfo.email = '';
                userInfo.password = '';
                userInfo.confirmPassword = '';
                commit('signingUp', false);
                commit('textLoading', true);
                commit('usernameExist', true);
                setTimeout(()=>{
                    commit('usernameExist', false);
                }, 2000)
            }
        });
    }
};

const mutations = {
    // For creating a new user
    newUser: (state, userInfo) => {state.userInfo = userInfo},
    // To check if a username already exist
    usernameExist: (state, username_exist) => {state.username_exist = username_exist},
    // The loader when signing up
    signingUp: (state, loading) => {state.loading = loading},
    // The text in the signup btn
    textLoading: (state, signUpText) => state.signUpText = signUpText,
    userRegistration: (state, userRegistrationSuccessful) => state.userRegistrationSuccessful = userRegistrationSuccessful,
};

export default {
    state,
    getters,
    actions,
    mutations
}