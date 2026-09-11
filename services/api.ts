import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "https://to-do-backend-iota-jade.vercel.app",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
