import { request, APIRequestContext, APIResponse } from '@playwright/test';
import { ENV } from '../config/env';
import * as allure from 'allure-js-commons';

export class APIClient {
  private context!: APIRequestContext;

  async init() {
    this.context = await request.newContext({
      baseURL: ENV.baseURL,
    });
  }

  // async getPostcode(country: string, postcode: string) {
  //   return await this.context.get(`/${country}/${postcode}`);
  // }

   async getPostcode(country: string, postcode: string): Promise<APIResponse> {
    const endpoint = `/${country}/${postcode}`;

    // Attach request details
    allure.attachment(
      'Request',
      JSON.stringify({
        method: 'GET',
        url: `${ENV.baseURL}${endpoint}`
      }, null, 2),
      'application/json'
    );

    const response = await this.context.get(endpoint);

    const body = await response.text();

    //  Attach response details
    allure.attachment(
      'Response',
      JSON.stringify({
        status: response.status(),
        body  
      }, null, 2),
      'application/json'
    );

    return response;
  }
}