import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 339d9497583d3530d0519cc9113603b72f3ef4f2828356af22b3232ae534f2e7'
      }
})

