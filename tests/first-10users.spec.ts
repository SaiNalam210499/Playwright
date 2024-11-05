import {test, expect} from '@playwright/test';

test('First ten users', async ({request}) => {

    //API Url
    const response= await request.get('https://fake-json-api.mock.beeceptor.com/users');

    // reuest status
    expect(response.status()).toBe(200);

    //response body as json
    const users= await response.json();

    // print's the id, name,email and company name of the first ten users
    for (let i=0; i<Math.min(10, users.length); i++){

        console.log(`ID: ${users[i].id},
            Name: ${users[i].name},
            Email: ${users[i].email},
            Company: ${users[i].company}`)

    }  
});