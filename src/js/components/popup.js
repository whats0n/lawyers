import {OPEN} from '../constants';
$('.js-modal-control').each((i, control) => {
  control = $(control);
  const modal = $(`.js-modal[data-modal="${control.data('target')}"]`);
  const prevent = modal.find('.js-modal-prevent');

  control.on('click', e => {
    e.preventDefault();
    modal.toggleClass(OPEN);
  });

  modal.on('click', e => {
    if ($(e.target).closest(prevent).length) return;
    modal.removeClass(OPEN);
  });
});
