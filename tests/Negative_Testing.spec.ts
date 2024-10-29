 import{test, expect} from '@playwright/test'
 const fs = require('fs');

 test.describe('Negative Testing for Login API',() =>{
    let payload;

test.beforeAll(()=>{
//Load the payload from a file
 payload=JSON.parse(fs.readFileSync('payload.json','utf8'));
});

test('should retrun error for missing email',async({request})=>{
    const response= await request.post('https://reqres.in/api/login', {
        data:{...payload, 
            email:'' }
    });

    expect(response.status()).toBe(400);
    
})
test('should retrun error for missing password',async({request})=>{
    const response= await request.post('https://reqres.in/api/login', {
        data:{...payload, 
            password:'' }
    });

    expect(response.status()).toBe(400);
    
})
test('should retrun error for invalid email format',async({request})=>{
    const response= await request.post('https://reqres.in/api/login', {
        data:{...payload, 
            email:'silaEmxemail' }
    });

    expect(response.status()).toBe(400);
    
})
test('should retrun error for incorrect password',async({request})=>{
    const response= await request.post('https://reqres.in/api/login', {
        data:{...payload, 
            password:'asl!30' }
    });

    expect(response.status()).toBe(200);
    
});
});