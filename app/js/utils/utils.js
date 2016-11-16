import { browserHistory } from 'react-router';
import service from '../serviceManager/ServiceManager';

const utils = {
    logIn() {
        sessionStorage.setItem('loggedIn', true);
        return true;
    },
    isLoggedIn() {
        return sessionStorage.getItem('loggedIn') === 'true' ? true : false;
    },
    handleLoggedOutRedirect() {
        !utils.isLoggedIn() && browserHistory.push('/');
    },
    logOut() {
        sessionStorage.setItem('loggedIn', false);
        browserHistory.push('/');
    },
    register(model) {
        service
            .exec("REGISTER",{data: model})
            .then(
                (response) => {
                    alert('Sign up successful');
                },
                (error) => {
                    alert(error.response.data.errorMessage);
                }
            );
        return true;
    }
}

module.exports = utils;