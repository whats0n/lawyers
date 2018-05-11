import { ACTIVE } from '../constants';

$('[data-preview]').each((i, container) => {
  container = $(container);
  const controls = $('[data-preview-control]');

  controls.on('click', e => {
    e.preventDefault();
    container.addClass(ACTIVE);
    controls.prop('disabled', true);
  });
});
