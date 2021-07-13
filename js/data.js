/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var formInput = document.querySelector('.input-form');

formInput.addEventListener('submit', submitUserInput);

function submitUserInput(event) {
  event.preventDefault();
  var image = document.querySelector('img');
  var inputForm = document.querySelector('.input-form');
  var input = inputForm.elements;
  var dataObject = {};
  for (var i = 0; i < input.length; i++) {
    if (input[i].name === 'title') {
      dataObject.title = input[i].value;
    } else if (input[i].name === 'photo-url') {
      dataObject.url = input[i].value;
    } else if (input[i].name === 'notes') {
      dataObject.notes = input[i].value;
    }
  }
  data.nextEntryId += 1;
  dataObject.nextEntryId = data.nextEntryId;
  data.entries.unshift(dataObject);
  inputForm.reset();
  image.src = 'images/placeholder-image-square.jpg';
  localStorage.setItem('entry-object', JSON.stringify(dataObject));
}

window.addEventListener('beforeunload', function getEntry() {
  localStorage.setItem('entry-id', data.nextEntryId);
  localStorage.setItem('data-model', JSON.stringify(data.entries));
});

var previousEntryID = localStorage.getItem('entry-id');
if (previousEntryID !== null) {
  data.nextEntryId = parseInt(previousEntryID);
}

var previousInput = localStorage.getItem('data-model');
if (previousInput !== null) {
  data.entries = JSON.parse(previousInput);
}
