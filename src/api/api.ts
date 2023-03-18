// import { login } from './../redux/auth-reducer';
import { /*ProfileType,*/ UserType } from './../types/types';
import axios from 'axios';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e551dc9c-6d28-43e1-be21-31d68748c676"
    }
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

// export const usersAPI = {
//     getUsers(currentPage = 1, pageSize = 10) {
//         return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//             .then(response => {
//                 return response.data;
//             });
//     },
//     follow(userId: number) {
//         return instance.post(`follow/${userId}`)
//     },
//     unfollow(userId: number) {
//         return instance.delete(`follow/${userId}`)
//     },
//     getProfile(userId: number) {
//         console.warn('Obsolete method. Please profileAPI object.');
//         return profileAPI.getProfile(userId);
//     }
// }

// export const profileAPI = {
//     getProfile(userId: number) {
//         return instance.get(`profile/` + userId);
//     },
//     getStatus(userId: number) {
//         return instance.get(`profile/status/` + userId);
//     },
//     updateStatus(status: string) {
//         return instance.put(`profile/status`, { status: status });
//     },
//     savePhoto(photoFile: any) {
//         const formData = new FormData();
//         formData.append('image', photoFile);

//         return instance.put(`profile/photo`, formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         });
//     },
//     saveProfile(profile: ProfileType) {
//         return instance.put(`profile`, profile);
//     }
// }

// type MeResponseTypes = {
//     data: { 
//         id: number
//         email: string
//         login: string
//     }
//     resultCode: ResultCodesEnum
//     messages: Array<string>
// }

// type LoginResponseTypes = {
//     data: { 
//         userId: number
//     }
//     resultCode: ResultCodesEnum | ResultCodeForCaptcha
//     messages: Array<string>
// } 

// export const authAPI = {
//     me() {
//         return instance.get<MeResponseTypes>('auth/me').then(res => res.data);
//     },
//     login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
//         return instance.post<LoginResponseTypes>('auth/login', { email, password, rememberMe, captcha })
//             .then(res => res.data);
//     },
//     logout() {
//         return instance.delete('auth/login');
//     }
// }

// export const securityAPI = {
//     getCaptchaUrl() {
//         return instance.get('security/get-captcha-url');
//     }
// }

