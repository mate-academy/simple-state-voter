import Voter from './voter.js';

new Voter({
  element: document.querySelector('[data-component="voter1"]')
});

new Voter({
  element: document.querySelector('[data-component="voter2"]')
});

new Voter({
  element: document.querySelector('[data-component="voter3"]')
});





// let message1 = new Message(
//   document.querySelector('[data-component="voter1"]'),
//   { text: 'Hello 1', title: 'Message 1' }
// );
//
// setInterval(() => {
//   message1.setProps({ text: Math.random() });
// }, 1000);
//
// setTimeout(() => {
//   message1.setProps({ title: 'New title' });
// }, 5000);
//
//
// let message2 = new Message(
//   document.querySelector('[data-component="voter2"]'),
// );


