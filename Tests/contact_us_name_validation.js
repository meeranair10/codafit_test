const { Builder} = require('selenium-webdriver');
async function Contactus_submit(){

    //launch the website
    const driver = await new Builder().forBrowser('firefox').build();

    try
    {

    //Navigate to contact page
    await driver.get('https://codafit.com/contact/');

    //Fill out the form fields


    await driver.findElement(By.xpath(By.cssSelector("#cn-accept-cookie"))).submit();
    await driver.findElement(By.name('your-name')).sendKeys('');
    await driver.findElement(By.name('your-email')).sendKeys('meeranair10@gmail.com');
    await driver.findElement(By.xpath("//input[@name='your-subject']")).sendKeys('test subject');
    await driver.findElement(By.name('acceptance-877')).isSelected();
    // Submit the form
    await driver.findElement((By.xpath("//input[@value='Send message']"))).submit();

    // Wait for the validation error appear
    await driver.wait(until.elementLocated(By.xpath("/span[@data-name='your-name']//span[@class='wpcf7-not-valid-tip'][normalize-space()='Please fill in the required field.']")), 10000);

    // Validate the success message text
    const validationMessage = await driver.findElement(By.xpath("//span[@data-name='your-name']//span[@class='wpcf7-not-valid-tip'][normalize-space()='Please fill in the required field.']")).getText();
    if (validationMessage.includes('Please fill in the required field')) {
      console.log('Form validation is successful for mandatory field.');
    } else {
      console.log('Form validation failed.');
    }

}
finally
{
    //close the browser
    await driver.quit();
}}
Contactus_submit()