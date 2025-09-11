describe.skip('iOS Find Element', () => {
  
  it('find element by xpath', async () => {
    // xpath - //tagname[@attribute=value]

    // await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
    // await $('//XCUIElementTypeStaticText[@label="Simple"]').click();

    await $('//*[@name="Alert Views"]').click();
    await $('//*[@label="Simple"]').click();
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
  });

  it('find element by class chain', async () => {
    //const alertText = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]'; // simple scenario
    const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
    await $(`-ios class chain:${alertText}`).click();
    await $('//*[@label="Simple"]').click();
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
  });

  it.only('find element by predicate string',async() =>{
    //const alertText = 'label =="Alert Views"]'; // simple scenario
    const alertText = 'value BEGINSWITH[c] "alert"'; // [c] means forget caps
    await $(`-ios predicate string:${alertText}`).click(); // advantage: easier readability
    await $('//*[@label="Simple"]').click();
    await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
  })
    

});
