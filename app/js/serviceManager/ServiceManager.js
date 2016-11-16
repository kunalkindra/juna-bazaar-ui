import axios from 'axios';
import {serviceCalls} from '../configs/configs';

class ServiceManager {
	constructor() {
		this.timeStamp = new Date();
	}

	/**
	 * This method is used as a helper method to execute ajax calls.
	 * @param callSignture ---- String Key to fetch configurations from config file.
	 * @param params  -- Object containing data against the data key. eg. {data : {dummy}}
	 * @returns {*}
	 */
	exec(callSignture, params) {
		return axios(Object.assign(serviceCalls[callSignture],params));
	}
}

module.exports = new ServiceManager();