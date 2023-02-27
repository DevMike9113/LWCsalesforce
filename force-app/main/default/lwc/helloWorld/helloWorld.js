import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    greeting = 'Boogers';
    changeHandler(event) {
      this.greeting = event.target.value;
    }
}