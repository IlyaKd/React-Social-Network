import { instance, APIResponseType, ResultCodesEnum, ResultCodeForCaptchaEnum } from './api';

type MeResponseDataTypes = {
    id: number
    email: string
    login: string
}

type LoginResponseDataTypes = {
    userId: number
}

export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataTypes>>('auth/me').then(res => res.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseDataTypes, ResultCodesEnum | ResultCodeForCaptchaEnum>>('auth/login', { email, password, rememberMe, captcha })
            .then(res => res.data);
    },
    logout() {
        return instance.delete('auth/login');
    }
}

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