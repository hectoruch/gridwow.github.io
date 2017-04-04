// Constants
const positionxBlock = $('#positionx');
const positionyBlock = $('#positiony');
const widthBlock = $('#width');
const heightBlock = $('#height');
const gridDiv = $('.grid');
const buttonFormBlock = $('.button-form-panel-home-block');
var cont = 0;

$(buttonFormBlock).click(function () {
  var style = '';
  style += 'grid-column: ' + positionxBlock.val() + ' / span ' + widthBlock.val() + ';';
  style += 'grid-row: ' + positionyBlock.val() + ' / span ' + heightBlock.val() + ';';
  $(gridDiv).append('<div style="' + style + '" class="grid-block block-' + cont + '">block-' + cont + '</div>');
  cont += 1;
  closePanel();
});
// Constants
const numberRows = $('#rows');
const numberColumns = $('#columns');
const gridColumns = $('.grid-columns');
const gridRows = $('.grid-rows');
const grid = $('.grid');
const buttonForm = $('.button-form-panel-home');

$(buttonForm).click(function () {
  $(gridColumns).html('');
  $(gridColumns).css('grid-template-columns', 'repeat(' + $(numberColumns).val() + ', 1fr)');
  $(gridRows).html('');
  $(gridRows).css('grid-template-rows', 'repeat(' + $(numberRows).val() + ', 1fr)');
  $(grid).css('grid-template-columns', 'repeat(' + $(numberColumns).val() + ', 1fr)');
  $(grid).css('grid-template-rows', 'repeat(' + $(numberRows).val() + ', 1fr)');

  for (var i = 0; i < numberColumns.val(); i += 1) {
    $(gridColumns).append('<div class="column"></div>');
  }

  for (var j = 0; j < numberRows.val(); j += 1) {
    $(gridRows).append('<div class="row"></div>');
  }

  closePanel();
});
// Constants
const panel = $('.panel-home');
const backPanel = $('.back-panel-home');
const buttonOpenModal = $('.button-open-home');
const handText = $('.hand-text');
const gridClass = $('.grid');

function openPanel() {
  $(panel).removeClass('-hidden');
  setTimeout(function () {
    $(backPanel).removeClass('-hidden');
    $(handText).addClass('-hidden');
  }, 301);
}
function closePanel() {
  $(panel).addClass('-hidden');
  setTimeout(function () {
    $(backPanel).addClass('-hidden');
  }, 301);
}

$(buttonOpenModal).click(function () {
  openPanel();
});

$(backPanel).click(function () {
  closePanel();
});
//# sourceMappingURL=bundle.js.map
