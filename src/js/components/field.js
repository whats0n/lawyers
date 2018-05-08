import { FOCUS } from '../constants';

$('.js-field').each((i, field) => {
	
  field = $(field);
  const input = field.find('.js-field-input');
  const select = field.find('.js-field-select');
  const datepicker = field.find('.js-field-datepicker');

  if (input.length) {
  	!input.val().length && field.removeClass(FOCUS);
    input.on({
    	'focus': () => {
      		field.addClass(FOCUS);
    	},
    	'blur': () => {
    		!input.val().length && field.removeClass(FOCUS);
    	}
    });
  } else if (select.length) {
    select
	    .select2({
		  minimumResultsForSearch: -1,
		  placeholder: ''
	    })
	    .on('select2:open', () => {
	    	console.log('show');
      		field.addClass(FOCUS);
	    })
	    .on('select2:close', () => {
    		!select.val().length && field.removeClass(FOCUS);
	    });
  } else if (datepicker.length) {
  	!datepicker.val().length && field.removeClass(FOCUS);
    datepicker
	    .datepicker({
		  autoclose: true,
		  format: 'MM dd, yyyy'
	    })
	    .on('show', () => {
      		field.addClass(FOCUS);
	    })
	    .on('hide', () => {
	    	!datepicker.val().length && field.removeClass(FOCUS);
	    });
  }

});
