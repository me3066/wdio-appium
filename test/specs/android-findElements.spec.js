describe('Testing accessibilityid', () =>{
it('Find element by acces id', async() =>{
    
  const appOption = await $('~App') ;// accessibility id is ~
  await appOption.click();
  // asserrtion
  const actionBar= await $('~Action Bar');
  await expect(actionBar).toBeExisting();
})

it('Find element by class name',async() => {
    const className = await $('android.widget.TextView');
    
    // Assertion
    await expect(className).toHaveText('API Demos');

})

xit('Find elements by xpath',async() => {
    //xpath - //tagname[@attribute='value']
    // e.g classname[@content-desc]
    // click on app
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

    // find by resource id ( //class[@resourceid])
    await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

    // find by text ( //class[@text])
    await $('//android.widget.TextView[@text="Command two"]').click();

    // find by class 
    const textAssertion= await $('//android.widget.TextView');
    await expect(textAssertion).toHaveText("You selected: 1 , Command two");
})

it('Find elements by UIAutomator',async() =>{
    await $('android= new UiSelector().textContains("Alert")').click();
})

it('Find multiple elements',async() => {
    // find multiple elements with classname
    const textList = await $$('android.widget.TextView');
    const expectedList = ['API Demos', "Access'ibility",
 'Accessibility',
'Animation',
'App',
'Content',
'Graphics',
'Media',
'NFC',
'OS',
'Preference',
'Text','Views'];
const actualList= [];

// You cant do textList.getText() as this method only works for one element

    // loop through them 
    for (const element of textList) {
        actualList.push(await element.getText());
    }

    // assert the list
    await expect(actualList).toEqual(expectedList);
})

it.only('tesing country flow',async() =>{

    // accessing auto complete screen
    await $('~Views').click();
    await $('//*[@text="Auto Complete"]').click();
    //await $('//android.widget.TextView[@content-desc="Auto Complete"]').click();
    await $('android=new UiSelector().textContains("1. Screen Top")').click();
    
    const textfield = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
    await textfield.addValue('Iran');
    await expect(textfield).toHaveText('Iran');

});
})