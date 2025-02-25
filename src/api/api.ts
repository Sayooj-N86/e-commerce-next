import axiosClient from "./config/AxiosConfig";

type TsignupSchema = {
    name: string;
    email: string;
    password: string;
    confirmpassword: string;
}
type TloginSchema = {
    email: string;
    password: string;
}

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
        signupApi: async function (data:TsignupSchema) {
            return await axiosClient.post("auth/signup",data);
        },
        loginApi: async function (data:TloginSchema) {
            return await axiosClient.post("auth/login",data);
        },
        orderApi: async function (data:unknown){
            const accessToken = window.localStorage.getItem('accessToken');
            return await axiosClient.post("order/create",data,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        },
            });               
        }
        
        
}