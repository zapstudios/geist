export type ApiClientSettings = {
    baseurl: string,
    service: ApiServiceType
}

export type ApiServiceType = {
    designation: string,
}

export interface IApiService {
    type: string;
    filepath: string
}