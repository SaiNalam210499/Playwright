import {test, expect} from '@playwright/test';

test('POST Request', async ({request}) => {

    //API Url
    const response = await request.put('https://reqres.in/api/users',{
        data: {
            name: 'Jill',
            job: 'Software Engineer'
        }
    });

    //Checks Status 
    expect(response.ok()).toBeTruthy();

    //prints in console
    console.log(await  response.json());



})