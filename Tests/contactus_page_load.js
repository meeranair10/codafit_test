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
       

        var currentUrl = driver.getCurrentUrl();
        if (currentUrl=='https://codafit.com/contact/')
        {console.log("contact us page loads successfully")}
        else
        {
            console.log("contact us page load failed")
        }

    }
    finally
{
    //close the browser
    await driver.quit();
}
}
