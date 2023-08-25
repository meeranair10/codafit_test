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
    await driver.findElement(By.name('your-email')).sendKeys('');
    await driver.findElement(By.xpath("//input[@name='your-subject']")).sendKeys('test subject');


    // Validate the submit is CTA is disabled , if the Privacy policy agreed checkbox is not enabled
    
    if( await driver.findElement((By.xpath("//input[@value='Send message']"))).isEnabled()) {
      console.log('Form validation is failed');
    } else {
      console.log('Form validation successful');
    }

}
finally
{
    //close the browser
    await driver.quit();
}}
Contactus_submit()