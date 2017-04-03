// Constants
const panel = $('.panel-home');
const backPanel = $('.back-panel-home');
const buttonOpenModal = $('.button-open-home');
const gridClass = $('.grid');

function openPanel() {
  $(panel).removeClass('-hidden');
  setTimeout(function(){
    $(backPanel).removeClass('-hidden');
  }, 301);
}
function closePanel() {
  $(panel).addClass('-hidden');
  setTimeout(function(){
    $(backPanel).addClass('-hidden');
  }, 301);
}

$(buttonOpenModal).click(function(){
  openPanel();
});

$(backPanel).click(function(){
  closePanel();
});
