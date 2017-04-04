// Constants
const positionxBlock = $('#positionx');
const positionyBlock = $('#positiony');
const widthBlock = $('#width');
const heightBlock = $('#height');
const gridDiv = $('.grid');
const buttonFormBlock = $('.button-form-panel-home-block');
var cont = 0;

$(buttonFormBlock).click(function(){
  var style = '';
  style += 'grid-column: ' + positionxBlock.val() + ' / span ' + widthBlock.val() + ';';
  style += 'grid-row: ' + positionyBlock.val() + ' / span ' + heightBlock.val() + ';'
  $(gridDiv).append('<div style="' + style + '" class="grid-block block-' + cont + '">block-' + cont + '</div>');
  cont += 1;
  closePanel();
});
