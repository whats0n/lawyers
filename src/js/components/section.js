const EDITING = 'is-editing';
const SELECTED = 'is-selected';

$('.js-section').each((i, section) => {
  section = $(section);
  const edit = section.find('.js-section-edit');
  const cancel = section.find('.js-section-cancel');

  edit
    .add(cancel)
    .on('click', e => {
      e.preventDefault();
      section.toggleClass(EDITING);
      section.toggleClass(SELECTED);
    });
});
