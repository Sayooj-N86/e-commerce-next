import axiosClient from "./config/AxiosConfig";

export const frontendApi = {

      
        homepageApi: async function () {
            return await axiosClient.get("home");
        },
        categorypageApi: async function () {
            return await axiosClient.get("categories");
        },
        
        productpageApi: async function (id:string) {
            return await axiosClient.get(`products/${id}`);
        },
        singleproductApi: async function (id:string) {
            return await axiosClient.get(`products/single/${id}`);
        },
        
}