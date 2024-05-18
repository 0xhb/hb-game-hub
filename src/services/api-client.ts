import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '16634f1b693944d4a7853cde2ebaf0e6'
    }
});