const baseServerUrl = 'http://localhost:8081';

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
        //signup dummy, update when integrating component
        SIGNUP: {
            url: baseServerUrl + '/signup',
            method: 'get'
        }

    }


}

module.exports = config;