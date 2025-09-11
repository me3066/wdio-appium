describe.skip('Android Native Feature Tests',async()=>{
    xit('Access an Activity directly',async()=>{
// Usage: startActivity(appPackage, appActivity, appWaitPackage, appWaitActivity, intentAction, intentCategory, intentFlags, optionalIntentArguments, dontStopAppOnReset)
    await driver.startActivity("io.appium.android.apis",".app.AlertDialogSamples");
    await driver.pause(3000); //wait 3s
    await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    })


    xit('Working with dialogue boxes',async() =>{
        await driver.startActivity("io.appium.android.apis",".app.AlertDialogSamples");
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]')
        .click();

        // Appium webdriver IO has defined methods for acceptAlet
        // and dismiss but not for ok button
        //accept Alert
        // await driver.acceptAlert();

        //Dismiss Alert
        //await driver.dismissAlert();

        // Click OK button
        //await $('//*[@text="OK"]').click();

        // get alert text
        //const a = await driver.getAlertText();
        //console.log(a);
        console.log('Alert TEXT -->', await driver.getAlertText());
        
        // assertion alert no longer visible
        //await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();

    })

    xit('Vertical scrolling',async() => {
        await $('~App').click();
        await $('~Activity').click();
    // Scroll to the end
    // create new Scrollable class collection, 
    // in the bracket going to select my scrollable item
    // scrollable(true) says you need to find an element which is scrollable
    // once it finds it, I want it to scroll to the end
    // scroll it once, speed is 5 (1,5)
    // scrollToEnd not stable if element gets moved
//await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        
// ScrollTextIntoView - more stable
await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")')
        .click();
        
        //await $('~Secure Surfaces').click();
        await expect($('~Secure Dialog')).toExist();
    })

    xit('Horizontal scrolling',async() => {
        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis.view.Gallery1"
        );
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');

    })

it.only('Working with a date picker', async () => {
    // access the date picker
    await driver.startActivity(
        "io.appium.android.apis",
        "io.appium.android.apis.view.DateWidgets1"
    );

    // get current date
    const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
    const currentDate = await date.getText();

    // click on change the date button
    await $('~change the date').click();

    // scroll right to the next month
    await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');

    // select the 10th date
    await $('//*[@text="10"]').click();

    // click on ok button
    await $('//*[@resource-id="android:id/button1"]').click();

    // verify the updated date
    const updatedDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();

    await expect(updatedDate).toContain("10");

});

})