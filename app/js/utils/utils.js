import { browserHistory } from 'react-router';

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
    }
}

module.exports = utils;