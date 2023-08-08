import { ApiClientSettings, IApiService } from "./globalTypes";

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
 * Universal api client
 * 
 * @version 0.1
 */
const GeistClient = {
   construct,
};

export default GeistClient;
