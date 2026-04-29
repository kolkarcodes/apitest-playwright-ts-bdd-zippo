// import { setWorldConstructor } from '@cucumber/cucumber';
// import |{APIRequestContext}| from "@playwright/test"

// import {APIClient} from "./world"

// export class CustomWorld {
//   api = new APIClient();
//   response: any;

//   async init() {
//     await this.api.init();
//   }
// }

// setWorldConstructor(CustomWorld);

// export { APIClient };
import { request, APIRequestContext } from '@playwright/test';
import { ENV } from '../config/env';

export class APIClient {
  private context!: APIRequestContext;

  async init() {
    this.context = await request.newContext({
      baseURL: ENV.baseURL,
    });
  }

  async getPostcode(country: string, postcode: string) {
    return await this.context.get(`/${country}/${postcode}`);
  }
}