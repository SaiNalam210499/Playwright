import { test, expect } from '@playwright/test';
import fs from 'fs';
import payload from '../tests/payload.json';

test.describe('Login API Negative Tests with Dynamic Payloads', () => {

  const baseUrl = 'https://reqres.in/api/login';
  const testpayload: { email?: string; password?: string } = { ...payload };
  // const payload = JSON.parse(fs.readFileSync('payload.json', 'utf8'));
  

  test('Should display error for missing email', async ({ request }) => {
    const response = await request.post(baseUrl, {
      });
      delete testpayload.email;
    
    expect(response.status()).toBe(400);
  });
  
  test('Should display error for missing password', async ({ request }) => {
    const response = await request.post(baseUrl, {
    
    });
    delete testpayload.password;
    expect(response.status()).toBe(400);
  });

  test('Should display error for invalid email and password format', async ({ request }) => {
    const response = await request.post(baseUrl, {
      
    });
    testpayload.email='test';
    testpayload.password='pass';
    expect(response.status()).toBe(400);
  });

});
