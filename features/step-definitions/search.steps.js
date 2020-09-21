const {Given, When, Then} = require('cucumber');
const {expect} = require('chai');

const TanihubPage = require('../pageobjects/tanihub.page');

Given(/^User choose area Jabodetabek$/, () => {
    TanihubPage.btnExplore.click();
    TanihubPage.chooseJabodetabek.click();
    TanihubPage.btnCloseAdvertise.waitForDisplayed();
    let isExist = TanihubPage.btnCloseAdvertise.isDisplayed();
    if(isExist){
        TanihubPage.btnCloseAdvertise.click();
    }

})

When(/^User search product "([^"]*)?"$/,(productName)=>{
    TanihubPage.btnCariProduk.click();
    TanihubPage.inputCariProduk.addValue(productName);
    driver.pressKeyCode(84);
    driver.hideKeyboard(); 
    driver.pause(2000)
    driver.pressKeyCode(66)
})

Then(/^User can see product "([^"]*)?"$/,(productName) => {
    const text = TanihubPage.resultSearch.getText();
    console.log(text);
    expect(text).to.equal(productName)
})