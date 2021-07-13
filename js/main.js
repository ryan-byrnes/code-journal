/* global data */
/* exported data */

var image = document.querySelector('img');
var imageInput = document.querySelector('.photo-url');

imageInput.addEventListener('input', imagePreview);

function imagePreview(event) {
  image.src = event.target.value;
  if (event.target.value === '') {
    image.src = 'images/placeholder-image-square.jpg';
  }
}

var formInput = document.querySelector('.input-form');

formInput.addEventListener('submit', submitUserInput);

function submitUserInput(event) {
  event.preventDefault();
  var dataObject = {};
  var image = document.querySelector('img');
  var inputForm = document.querySelector('.input-form');
  var input = inputForm.elements;
  for (var i = 0; i < input.length; i++) {
    if (input[i].name === 'title') {
      dataObject.title = input[i].value;
    } else if (input[i].name === 'photo-url') {
      dataObject.url = input[i].value;
    } else if (input[i].name === 'notes') {
      dataObject.notes = input[i].value;
    }
  }
  dataObject.entryId = data.nextEntryId;
  data.nextEntryId += 1;
  data.entries.unshift(dataObject);
  inputForm.reset();
  image.src = 'images/placeholder-image-square.jpg';
}
