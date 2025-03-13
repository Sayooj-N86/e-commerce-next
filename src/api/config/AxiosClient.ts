import { baseUrl } from "@/app/utils/Baseurl";
import axios from "axios";
import { getSession } from "next-auth/react";

export const getToken = async () => {
  const session = await getSession();
  let headers = {};
  if (session?.accessToken) {
    headers = {
      Authorization: `Bearer ` + session.accessToken,
    };
  }

  return headers;
};

export const axiosClient = async () => {
  const response = await getToken();
  console.log("response::::", response);
  return axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${response}`,
    },
  });
};


// export const getAxiosHeaders = async () => {
//     const session = await getSession();
//     console.log("session-Client:::::::::", session?.accessToken);
  
//     let headers = {};
//     if (session?.accessToken) {
//       headers = {
//         Authorization: `Bearer ` + session.accessToken,
//       };
//     }
  
//     return headers;
//   };
  
//   // Function to create the axios client with the session headers
//   export const axiosClient = async () => {
//     const headers = await getAxiosHeaders(); // Await headers to be fetched
  
//     console.log("headers:::",headers)
//     return axios.create({
//       baseURL: BaseUrl,
//       headers: headers,
//     });
  
//   };