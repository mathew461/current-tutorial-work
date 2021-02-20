import axios from 'axios';

const KEY = 'AIzaSyBTm9HO_HP9DVeNRqg0SH380jbhH4zN_iI';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

