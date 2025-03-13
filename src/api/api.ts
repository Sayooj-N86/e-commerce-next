import axiosServer from "./config/AxiosServer";
import {axiosClient} from "./config/AxiosClient";

type TsignupSchema = {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
};
type TloginSchema = {
  email: string;
  password: string;
};

export const frontendApi = {
  homepageApi: async function () {
    const server = await axiosServer();
    return await server.get("home");
  },
  categorypageApi: async function () {
    const server = await axiosServer();
    return await server.get("categories");
  },

  productpageApi: async function (id: string) {
    const server = await axiosServer();
    return await server.get(`products/${id}`);
  },
  singleproductApi: async function (id: string) {
    const server = await axiosServer();
    return await server.get(`products/single/${id}`);
  },
  signupApi: async function (data: TsignupSchema) {
    const client = await axiosClient();
    return await client.post("auth/signup", data);
  },
  loginApi: async function (data: TloginSchema) {
    const client = await axiosClient();
    return await client.post("auth/login", data);
  },
  orderApi: async function (data: unknown) {
    // const accessToken = window.localStorage.getItem("accessToken");
    // const response = await axiosClient.post("order/create", data, {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // });
    const client = await axiosClient();
    return await client.post("order/create",data);
    // console.log("response::", response);
    // return response.data;
  },
  paymentApi: async function (id: string) {
    const client = await axiosClient();
    return await client.post(`order/payment?orderId=${id}`,{});
    // const accessToken = window.localStorage.getItem("accessToken");
    // const response = await axiosClient.post(
    //   `order/payment?orderId=${id}`,
    //   {},
    //   {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   }
    // );
    // return response.data;
  },
};
