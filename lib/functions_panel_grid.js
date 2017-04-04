// Constants
const numberRows = $('#rows');
const numberColumns = $('#columns');
const gridColumns = $('.grid-columns');
const gridRows = $('.grid-rows');
const grid = $('.grid');
const buttonForm = $('.button-form-panel-home');
const buttonFormBlockDisable = $('.button-form-panel-home-block');

$(buttonForm).click(function() {
  $(buttonFormBlockDisable).removeClass('-disable');
  $(gridColumns).html('');
  $(gridColumns).css('grid-template-columns', 'repeat(' + $(numberColumns).val() + ', 1fr)');
  $(gridRows).html('');
  $(gridRows).css('grid-template-rows', 'repeat(' + $(numberRows).val() + ', 1fr)');
  $(grid).css('grid-template-columns', 'repeat(' + $(numberColumns).val() + ', 1fr)');
  $(grid).css('grid-template-rows', 'repeat(' + $(numberRows).val() + ', 1fr)');

  for (var i = 0; i < (numberColumns).val(); i += 1) {
    $(gridColumns).append('<div class="column"></div>');
  }

  for (var j = 0; j < (numberRows).val(); j += 1) {
    $(gridRows).append('<div class="row"></div>');
  }

  closePanel();

});
