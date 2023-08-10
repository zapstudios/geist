import {ApiOptions, ApiResponse} from './typing';

/**
 * Basic request function
 * @TODO: implement & test with real use case
 * @param options
 */
const request: (options: ApiOptions) => Promise<ApiResponse> = async (options: ApiOptions): Promise<ApiResponse> => {
    let url = process.env.REACT_APP_API_BASE_URL + options.endpoint;
    try {
        const response = await fetch(url, {
            method: options.type.designation,
            mode: options.mode,
            cache: options.cache,
            redirect: options.redirect,
            referrerPolicy: options.referrer,
        });

        return await response.json();
    } catch (e) {
        return new Promise((e) => {
            return {
                message: e.toString() ?? 'Unknown Error'
            }
        });
    }
}


export const GeistRestClient: { request: (options: ApiOptions) => Promise<ApiResponse> } = {
    request
}