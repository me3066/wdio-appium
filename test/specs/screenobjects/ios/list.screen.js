import { $ } from '@wdio/globals';   // <-- add this pulls WebdriverIO’s element query function into your file.

class ListScreen {
  //get createListBtn()  { return $('//*[@name="Create List"]'); }
  get createListBtn() { return $('//*[@name="Create list"]'); } // accessibility id strategy
  get listNameInput()  { return $('//*[@value="List Name"]'); }
  get createBtn()      { return $('~Create'); }
  listNameField(name)  { return $(`~${name}`); }

  async waitLoaded() {
    await this.createListBtn.waitForDisplayed({ timeout: 15000 });
  }
}

export default new ListScreen();