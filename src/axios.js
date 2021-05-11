import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = 'https://builder-57473-default-rtdb.firebaseio.com';

export default instance;