import AddNoteScreen from '../screenobjects/android/AddNote.screen.js';

describe('Add Notes', () => {

    before(async() =>{
        console.log("before hooks")
    });

    beforeEach(async() =>{
        console.log("before each Hook")
    });

    afterEach(async()=>{
        console.log("after each hook");
    })

    it('Skip tutorial', async () => {
        await AddNoteScreen.skipBtn.click();
        await expect(AddNoteScreen.addNote).toBeDisplayed();
    });

it('Add a note, save changes and verify note', async () => {
    await AddNoteScreen.addNote.click();
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/select_dialog_listview"]/android.widget.LinearLayout[1]').click();

    const datetimeField = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/datetime_relative"]');
    await expect(datetimeField).toBeDisplayed();

    const titleField = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    await titleField.waitForDisplayed({ timeout: 5000 });
    await titleField.addValue('fav anime list');

    const noteField = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
    await noteField.waitForDisplayed({ timeout: 5000 });
    await noteField.addValue("Naruto\nOnepiece\nAOT");

    await driver.back();
    await driver.back();

    const editBtn = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
    await expect(editBtn).toBeDisplayed();

    const titleFieldAfter = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
    await expect(titleFieldAfter).toHaveText('fav anime list');
});

});
