/* global data */
/* exported data */

var image = document.querySelector('img');
var imageInput = document.querySelector('.photo-url');

imageInput.addEventListener('input', imagePreview);

function imagePreview(event) {
  image.src = event.target.value;
}

var formInput = document.querySelector('.input-form');

formInput.addEventListener('submit', submitUserInput);

var entryId = 0;
var dataModel = [];

function submitUserInput(event) {
  event.preventDefault();
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
  entryId += 1;
  dataObject.nextEntryId = entryId;
  dataModel.unshift(dataObject);
  inputForm.reset();
  image.src = 'images/placeholder-image-square.jpg';
  localStorage.setItem('entry-object', JSON.stringify(dataObject));
  localStorage.setItem('data-model', JSON.stringify(dataModel));
}
