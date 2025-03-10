import { baseUrl } from "@/app/utils/Baseurl";
import axios from "axios";

export const axiosClient = axios.create({
    baseURL: baseUrl,
    
});
export default axiosClient;