import { ApiClientSettings, IApiService } from "./globalTypes";

/**
 * example api service
 * @description used as fallback
 */
const ExampleApiService: IApiService = {
    type: 'rest',
    filepath: 'rest/rest.ts'
}

/**
 * Sets runtime variables & "constructs" the universal api client
 *
 * @param options
 */
const construct: (options: ApiClientSettings) => IApiService = (options: ApiClientSettings): IApiService => {
    return ExampleApiService;
}

/**
 * @description will be used to find fitting request file
 */
const _find: () => void = () => {}


/**
 * Universal api client
 *
 * @version 0.1
 */
const GeistClient = {
   construct,
};

export default GeistClient;
