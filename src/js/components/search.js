import { OPEN, ACTIVE } from '../constants';

const controls = $('.js-search-control');
const container = $('.js-search');

controls.on('click', e => {
  e.preventDefault();
  console.log('click');
  controls.toggleClass(ACTIVE);
  container.toggleClass(OPEN);
});
