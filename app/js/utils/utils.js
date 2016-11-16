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
        service.exec("REGISTER",{data: model});
        utils.logIn()
        return true;
    }
}

module.exports = utils;