import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://vue-update-axios-ec531.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance