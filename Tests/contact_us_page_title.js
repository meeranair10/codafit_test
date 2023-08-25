const { Builder, By, Key, until } = require('selenium-webdriver');
async function Contactus(){

    //Setup the Selenium WebDriver
    const driver = await new Builder().forBrowser('firefox').build();

    try
    {
        //Navigate to the home page
        await driver.get('https://codafit.com/');

        //click on the contact link
        const contactLink = await driver.findElement(By.xpath("//li[@id='nav-menu-item-5637']//spa"));
        await contactLink.click();

        //wait for the contact page to load
       

        var currentUrl = driver.getTitle();
        if (currentUrl.includes('Let’s talk business”'))
        {console.log("Page Title is validated successfully")}
        else
        {
            console.log("Page Title is validation failed")
        }

    }
    finally
{
    //close the browser
    await driver.quit();
}
}
