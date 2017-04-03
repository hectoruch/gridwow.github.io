// Constants
const positionx = $('#positionx');
const positiony = $('#positiony');
const width = $('#width');
const height = $('#height');
const gridDiv = $('.grid');
const buttonFormBlock = $('.button-form-panel-home-block');
var cont = 0;

$(buttonFormBlock).click(function(){
  var style = '';
  style += 'grid-column: ' + positionx.val() + ' / span ' + width.val() + ';';
  style += 'grid-row: ' + positiony.val() + ' / span ' + height.val() + ';'
  $(gridDiv).append('<div style="' + style + '" class="grid-block block-' + cont + '">block-' + cont + '</div>');
  cont += 1;
  closePanel();
});
