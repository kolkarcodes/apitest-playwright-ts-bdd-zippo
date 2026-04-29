import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('the API base URL is configured', async function () {
  // Already handled in setup
});

When(
  'I request postcode {string} for country {string}',
  async function (postcode: string, country: string) {
    this.response = await this.api.getPostcode(country, postcode);
  }
);

Then('the response status should be {int}', async function (status: number) {
  expect(this.response.status()).toBe(status);
});

Then('the country should be {string}', async function (country: string) {
  const body = await this.response.json();
  expect(body.country).toBe(country);
});

Then('the postcode should be {string}', async function (postcode: string) {
  const body = await this.response.json();
  expect(body['post code']).toBe(postcode);
});