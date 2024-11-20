import axiosServices from "../Core/Interceptor/RequestInterceptor.ts";

export const authenticateUser = async (userName: string, password: string): Promise<any> => {
  
  const params = new URLSearchParams({
    usr: userName,
    pwd: password,
  });

  const response = await axiosServices.post(`api/method/login?${params.toString()}`);

  return response;
};
