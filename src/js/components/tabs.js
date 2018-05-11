import { ACTIVE, OPEN, DISABLED, WIN } from '../constants';

const get = props => {
  const {target, shadows, controls, contents} = props;

  const currentShadows = shadows.filter(`[data-tabs-shadow-control="${target}"]`);
  const currentControls = controls.filter(`[data-tabs-control="${target}"]`);
  const currentContents = contents.filter(`[data-tabs-content="${target}"]`);
  
  return {
    controls, 
    shadows, 
    contents,
    currentContents,
    currentControls,
    currentShadows
  };
};

const show = props => {
  const {controls, shadows, contents, currentContents, currentControls, currentShadows} = props;

  controls
    .add(shadows)
    .removeClass(ACTIVE);
  currentControls
    .add(currentShadows)
    .addClass(ACTIVE);
  contents.removeClass(OPEN);
  currentContents.addClass(OPEN);
};

$('[data-tabs]').each((i, container) => {

  container = $(container);
  const controls = container.find('[data-tabs-control]');
  const shadows = container.find('[data-tabs-shadow-control]');
  const contents = container.find('[data-tabs-content]');

  const first = controls.first();
  const firstTarget = first.data('tabs-control');

  const current = get({ shadows, controls, contents, target: firstTarget });
  show(current);

  controls
    .add(shadows)
    .each((i, control) => {
      control = $(control);
      const primary = control.data('tabs-control');
      const secondary = control.data('tabs-shadow-control');
      const target = primary && primary.length ? primary : secondary;
      const current = get({ shadows, controls, contents, target });

      control.on('click', e => {
        e.preventDefault();
        if (control.hasClass(DISABLED)) return;
        show(current);
      });
    });

});
