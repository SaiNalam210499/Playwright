import {test, expect} from '@playwright/test';

test('Fill out DemoQA practice form', async ({page}) => {

    //navigate to url
    await page.goto('https://demoqa.com/automation-practice-form');
    await page.waitForLoadState('load');

    //Fill out the form fields
    await page.waitForSelector('#firstName');
    await page.fill('#firstName' ,'Ken');
    await page.fill('#lastName','john');
    await page.fill('#userEmail','kenjohn@gmail.com');
    await page.waitForTimeout(3000);
    await page.click('text=Male');
    await page.fill('#userNumber','0987654321');
    await page.waitForTimeout(3000);
    await page.click('#dateOfBirthInput');
    await page.waitForTimeout(3000);
    await page.selectOption('.react-datepicker__month-select','3');
    await page.selectOption('.react-datepicker__year-select','1999');
    await page.click('.react-datepicker__day--015');
    await page.waitForTimeout(3000);
    await page.fill('#subjectsInput', 'Math');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);
    await page.click('text=Sports'); 
    await page.check('text=Music');
    //upload file
    const filePath = './tests/download.jpeg';
    await page.setInputFiles('#uploadPicture', filePath);
    //Address
    await page.fill('#currentAddress', '123 roman Street, yog City, HR-509604');
    await page.waitForTimeout(3000);
    await page.click('#state');
    await page.click('text=Haryana');
    await page.click('#city');
    await page.click('text=Panipat');
    //Submit
    await page.click('#submit')








   
});