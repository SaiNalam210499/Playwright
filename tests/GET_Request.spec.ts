import {test, expect} from '@playwright/test';

test('GET Request', async ({request}) => {

    //API Url
    const response = await request.get('https://fakestoreapi.com/products/1')

    //Checks Status 
    expect(response.ok()).toBeTruthy();

    //prints in console
    console.log(await  response.json());



})