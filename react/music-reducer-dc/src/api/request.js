import { axiosInstance } from "./config";

export const loginByPhoneRequest=(phone,password)=>{
    return axiosInstance.get(
        `/login/cellphone?phone=${phone}$password=${password}`
    );
}

export const getSingerInfoRequest =id=>{
    return axiosInstance.get(`/artists?id=${id}`)
}