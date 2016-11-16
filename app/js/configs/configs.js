const baseServerUrl = 'http://localhost:9000';

const config = {
    baseServerUrl : baseServerUrl,
    serviceCalls: {
        //Cloudinary base configs
        CLOUDINARY_UPLOAD: {
            url: 'https://api.cloudinary.com/v1_1/dnryicujh/upload',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            method: 'post'
        },
        REGISTER: {
            url: baseServerUrl + '/register',
            method: 'post'
        },
        LOAD_ADS: {
            url: baseServerUrl + '/open/products',
            method: 'get'
        },
        SIGN_IN: {
            url: baseServerUrl + '/login',
            method: 'post'
        },
        POST_ADD  :{
            url: baseServerUrl + '/open/product',
            method: 'post'
        }

    }


}

module.exports = config;