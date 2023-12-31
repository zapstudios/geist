// todo: add own typings for soap client
import {ApiOptions, ApiMessage, ApiResponse} from '../rest/typing';
import {GeistXMLMapper} from "./xmlmapper";

/**
 * soap request function
 * @param apiOptions
 */
const soap = async (apiOptions: ApiOptions): Promise<ApiResponse<ApiMessage>> => {
    try {
        const {endpoint, body} = apiOptions;

        const soapEnvelope = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
        <soapenv:Header/>
        <soapenv:Body>` + body + `</soapenv:Body>
     </soapenv:Envelope>
 `;

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/xml',
            },
            body: soapEnvelope,
        });


        return GeistXMLMapper.xmlToJson(await response.text());
    } catch (error) {
        throw new Error('SOAP request failed');
    }
};

/**
 * default soap client
 */
export const GeistSoapClient: { soap: (apiOptions: ApiOptions) => Promise<ApiResponse<ApiMessage>> } = {
    soap
}