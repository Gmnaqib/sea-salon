const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        'Authorization': `Bearer ${API_KEY}`
    }
});

const getService = () => axiosClient.get('services?populate=*');
const bookServices = (data) => axiosClient.post('/reservations', data);
const rateStar = (data) => axiosClient.post('/reviews', data);
const showrate = () => axiosClient.get('/reviews');
const addService = (data) => axiosClient.post('/services', data);
const getReservation = () => axiosClient.get('reservations?populate=*');

export default {
    getService,
    bookServices,
    rateStar,
    showrate,
    addService,
    getReservation
};
