/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', function getEntry() {
  localStorage.setItem('data-model', JSON.stringify(data));
});

var previousInput = localStorage.getItem('data-model');
if (previousInput !== null) {
  data = JSON.parse(previousInput);
}
