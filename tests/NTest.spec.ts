const { test, expect } = require('@playwright/test');
const fs = require('fs');

test.describe('Login API Negative Tests with Dynamic Payloads', () => {

  const baseUrl = 'https://reqres.in/api/login';
  const payload=JSON.parse(fs.readFileSync('payload.json','utf8'));

  test('Should display error for missing email', async ({ request }) => {
    const response = await request.post(baseUrl, {
      data: payload.missingEmail
    });
    expect(response.status()).toBe(400);
  });

  test('Should display error for missing password', async ({ request }) => {
    const response = await request.post(baseUrl, {
      data: payload.missingPassword
    });
    expect(response.status()).toBe(400);
  });

  test('Should display error for invalid email format', async ({ request }) => {
    const response = await request.post(baseUrl, {
      data: payload.invalidEmail
    });
    expect(response.status()).toBe(400);
  
  });

});
