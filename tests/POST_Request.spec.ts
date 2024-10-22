import {test, expect} from '@playwright/test';

test('POST Request', async ({request}) => {

    //API Url
    const response = await request.post('https://reqres.in/api/users',{
        data: {
            name: 'James',
            job: 'leader'
        }
    });

    //Checks Status 
    expect(response.ok()).toBeTruthy();

    //prints in console
    console.log(await  response.json());



})