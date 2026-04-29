import { setWorldConstructor } from '@cucumber/cucumber';
import { APIClient } from './apiClient';

class CustomWorld {
  api = new APIClient();
  response: any;

  async init() {
    await this.api.init();
  }
}

setWorldConstructor(CustomWorld);