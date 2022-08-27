"use strict"
import _ from 'lodash';
import button from './components/button/button';

function app() {
  const app = document.createElement('div');
  app.classList.add('app')
  element.append(button('click'))
  return element;
}

window.addEventListener('load', () => {
  document.body.appendChild(app());
})