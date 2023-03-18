import { instance } from './api';

// export const securityAPI = {
//     getCaptchaUrl() {
//         return instance.get('security/get-captcha-url');
//     }
// }

type GetCaptchaUrlResponseType = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlResponseType>('security/get-captcha-url').then(res => res.data);
    }
}