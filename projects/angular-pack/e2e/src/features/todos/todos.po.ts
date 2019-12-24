import { browser, by, element } from 'protractor';

export class TodosPage {
  navigateTo() {
    return browser.get('/examples/todos');
  }

  getInput() {
    return element(by.name('todos'));
  }

  getAddTodoButton() {
    return element(by.css('.btn-add'));
  }

  getResults() {
    return element.all(by.css('mat-card.todo'));
  }
}