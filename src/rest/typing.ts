import { ApiServiceType } from "../globalTypes";

export type ApiMessage = {
    message: string,
    code: number,
    type: ApiServiceType
}

export type ApiResponse<Type = any> = {
    message: string,
    code: number,
    type: ApiServiceType,
    return: boolean,
} & Array<Type> & Type;

export type ApiOptions = {
    endpoint: string,
    type: ApiServiceType,
    mode: any // to be implemented
    cache: any // to be implemented
    redirect: any // to be implemented
    referrer: any // to be implemented
    body?: ApiMessage
}
