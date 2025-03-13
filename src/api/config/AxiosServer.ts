import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { baseUrl } from "@/app/utils/Baseurl";
import axios from "axios";
import { getServerSession } from "next-auth";

 const axiosServer = async () => {
  const session = await getServerSession(authOptions);
  return axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
};
export default axiosServer;
