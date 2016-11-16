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
		var config = Object.assign(serviceCalls[callSignture],params);
		if(config.data && config.data.toString() === '[object Object]') {
			if(config.method === 'post' || config.method === 'put') {
				config.data = this.objectToFormData(config.data);
			} else {
				config.url += this.objectToQueryString(config.data);
			}
		}

		return axios(config);
	}

	objectToFormData(obj, form, namespace) {

		var fd = form || new FormData();
		var formKey;

		for(var property in obj) {
			if(obj.hasOwnProperty(property)) {

				if(namespace) {
					formKey = namespace + '[' + property + ']';
				} else {
					formKey = property;
				}

				// if the property is an object, but not a File,
				// use recursivity.
				if(typeof obj[property] === 'object' && !(obj[property] instanceof File)) {

					objectToFormData(obj[property], fd, property);

				} else {

					// if it's a string or a File object
					fd.append(formKey, obj[property]);
				}

			}
		}

		return fd;

	}

	objectToQueryString(data) {
		var queryParams = [];
		for(var key in data) {
			queryParams.push(key + "=" + data[key]);
		}
		return ("?" + queryParams.join('&'));
	}
}

module.exports = new ServiceManager();