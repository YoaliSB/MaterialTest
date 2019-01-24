import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';


const username = new MDCTextField(document.querySelector('.username'));
const password = new MDCTextField(document.querySelector('.password'));
const name = new MDCTextField(document.querySelector('.name'));
const email = new MDCTextField(document.querySelector('.email'));
const address = new MDCTextField(document.querySelector('.address'));
const phone = new MDCTextField(document.querySelector('.phone'));

new MDCRipple(document.querySelector('.cancel'));
new MDCRipple(document.querySelector('.next'));