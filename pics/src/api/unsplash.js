import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID qW6pEaS8WfDU5VewZNyucAQZrOx2JPVobZueAwMCSo4'
    }
});