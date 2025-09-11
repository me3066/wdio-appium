describe.skip('iOS Native Features',() =>{
    it('Alert Box',async() =>{
         await $('~Alert Views').click();
         await $('~Okay / Cancel').click();

         // Click ok on the modal
         //await $('~OK').click();

        // get alert text
         console.log(await driver.getAlertText());

         // accept/dismiss alert
         await driver.acceptAlert();
         //await driver.dismissAlert();

         // dismiss alert
         // await driver.
         
         // assertion
         await expect($('~Ok')).not.toExist();
    });

   it('Working with Scrollable elements', async () => {
    // easiest
    // await driver.execute('mobile: scroll', { direction: "down" });
    // await driver.execute('mobile: scroll', { direction: "up" });

    // complex
    await $('~Picker View').click();

    const redPicker = await $('~Red color component value');
    const bluePicker = await $('~Blue color component value');

    await driver.execute('mobile: scroll', { element: redPicker.elementId, direction: "down" });
    await driver.execute('mobile: scroll', { element: bluePicker.elementId, direction: "up" });

    await driver.pause(2000);
});

   xit('Working with Picker view', async () => {
        await $('~Picker View').click();

        const redPicker = await $('~Red color component value');
        const greenPicker = await $('~Green color component value');
        const bluePicker = await $('~Blue color component value');

        // set purple color (125, 0, 125)
        await redPicker.addValue('125');
        await greenPicker.addValue('0');
        await bluePicker.addValue('125');

        await driver.pause(2000);
    });

}) 