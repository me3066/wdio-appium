import { expect } from '@wdio/globals'; 
//import ListScreen from '../../screenobjects/ios/list.screen.js'; // wrong
//import ListScreen from '../../screenobjects/ios/list.screen.js';  // ✅ matches your tree

//import ListScreen from '../../../screenobjects/ios/list.screen.js';  // ✅ matches your tree

import ListScreen from '../screenobjects/ios/list.screen.js';




describe('Todo List', () => {
  it('Create a Todo List', async () => {
    await ListScreen.waitLoaded();

    await ListScreen.createListBtn.click();
    await ListScreen.listNameInput.waitForDisplayed({ timeout: 10000 });
    await ListScreen.listNameInput.addValue('Things to do today');
    await ListScreen.createBtn.waitForEnabled({ timeout: 10000 });
    await ListScreen.createBtn.click();

    await expect(ListScreen.listNameField('Things to do today')).toBeExisting();
  });
});
