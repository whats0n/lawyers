import { ACTIVE } from '../constants';

$('[data-toggle-control]').each((i, control) => {
  control = $(control);
  const target = control.data('toggle-control');
  const sections = $(`[data-toggle-section="${target}"]`);

  control.on('click', e => {
    e.preventDefault();
    sections.length && sections.addClass(ACTIVE);
  });
});
