/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', dataView);

window.addEventListener('beforeunload', function getEntry() {
  localStorage.setItem('data-model', JSON.stringify(data));
});

var previousInput = localStorage.getItem('data-model');
if (previousInput !== null) {
  data = JSON.parse(previousInput);
}

function dataView() {
  var viewElements = document.querySelectorAll('.view');
  for (var i = 0; i < viewElements.length; i++) {
    if (viewElements[i].className === 'container view') {
      data.view = viewElements[i].getAttribute('data-view');
    }
  }
  return data.view;
}
