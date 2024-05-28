import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});

// axiosInstance.interceptors.response.use(
//     (response) => {
//         const jsessionId = response.headers['set-cookie']?.find(cookie => cookie.startsWith('JSESSIONID'));

//         if (jsessionId) {
//             localStorage.setItem('JSESSIONID', jsessionId.split(';')[0]);
//         }

//         return response;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

export default axiosInstance;
