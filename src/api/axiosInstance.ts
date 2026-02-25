import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://192.168.0.234:8001",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
