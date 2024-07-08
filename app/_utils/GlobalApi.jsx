const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
    baseURL: 'https://sea-salon-backend.onrender.com/api',
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
const getBookedSlots = (serviceName, reservationDate) => axiosClient.get(`/reservations?filters[serviceName][$eq]=${serviceName}&filters[reservationDate][$eq]=${reservationDate}`);

export default {
    getService,
    bookServices,
    rateStar,
    showrate,
    addService,
    getReservation,
    getBookedSlots
};
