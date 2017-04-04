// Constants
const panel = $('.panel-home');
const backPanel = $('.back-panel-home');
const buttonOpenModal = $('.button-open-home');
const handText = $('.hand-text');
const gridClass = $('.grid');

function openPanel() {
  $(panel).removeClass('-hidden');
  setTimeout(function(){
    $(backPanel).removeClass('-hidden');
    $(handText).addClass('-hidden');
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
