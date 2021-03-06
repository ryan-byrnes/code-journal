/* global data */
/* exported data */

var image = document.querySelector('.entry-image');
var imageInput = document.querySelector('.photo-url');

imageInput.addEventListener('input', imagePreview);

function imagePreview(event) {
  image.src = event.target.value;
  if (event.target.value === '') {
    image.src = 'images/placeholder-image-square.jpg';
  }
}

document.addEventListener('submit', submitUserInput);

function submitUserInput() {
  event.preventDefault();
  var dataObject = {};
  var image = document.querySelector('.entry-image');
  var inputForm = document.querySelector('.input-form');
  var input = inputForm.elements;
  dataObject.title = input.title.value;
  dataObject.url = input['photo-url'].value;
  dataObject.notes = input.notes.value;
  dataObject.entryId = data.nextEntryId;
  data.nextEntryId += 1;
  data.entries.unshift(dataObject);
  inputForm.reset();
  image.src = 'images/placeholder-image-square.jpg';
  var dataViewEntries = document.querySelector('ul');
  dataViewEntries.prepend(addEntry(data.entries[0]));
  var hideNoEntryText = document.getElementById('no-entries');
  hideNoEntryText.classList.add('hidden');
  var entriesView = document.getElementById('entries-view');
  data.view = entriesView.getAttribute('data-view');
  location.href = '#entries-view';
  switchViews();

}

/*
<ul>
  <div class="row">
    <div class="column-half">
      <li>
        <img src="images/placeholder-image-square.jpg">
      </li>
    </div>
    <div class="column-half">
      <li>
        <h2 class="margin-top-10">Ada Lovelace</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facere, neque eos consequuntur adipisci modi voluptas nihil quia aspernatur nemo sint? Quis minus numquam asperiores? Cumque asperiores repellendus repellat iusto porro rem delectus fuga id nam, tenetur doloribus consequuntur quam sapiente deserunt eius facere dolorum obcaecati exercitationem dolor magni ullam reiciendis! Excepturi suscipit labore odio ullam, ipsa voluptatum cum aliquid maiores. Ad deleniti totam dolor commodi quod, quae fuga, laboriosam illo alias ut perferendis libero animi error perspiciatis quibusdam blanditiis?</p>
      </li>
    </div>
  </div>
</ul>
*/

function addEntry(entries) {

  var newUnorderedList = document.createElement('ul');
  var dataViewEntry = document.querySelector('div[data-view="entries"]');
  dataViewEntry.appendChild(newUnorderedList);

  var divRow = document.createElement('div');
  divRow.setAttribute('class', 'row');
  newUnorderedList.appendChild(divRow);

  var divColumnHalf1 = document.createElement('div');
  divColumnHalf1.setAttribute('class', 'column-half');
  divRow.appendChild(divColumnHalf1);

  var liImage = document.createElement('li');
  divColumnHalf1.appendChild(liImage);

  var image = document.createElement('img');
  image.setAttribute('src', entries.url);
  image.setAttribute('class', 'dom-tree-image');
  liImage.appendChild(image);

  var divColumnHalf2 = document.createElement('div');
  divColumnHalf2.setAttribute('class', 'column-half');
  divRow.appendChild(divColumnHalf2);

  var liText = document.createElement('li');
  divColumnHalf2.appendChild(liText);

  var heading = document.createElement('h2');
  heading.textContent = entries.title;
  liText.appendChild(heading);

  var bodyText = document.createElement('p');
  bodyText.textContent = entries.notes;
  liText.appendChild(bodyText);

  return newUnorderedList;
}

window.addEventListener('DOMContentLoaded', function appendEntries() {
  for (var i = 0; i < data.entries.length; i++) {
    var dataViewEntries = document.querySelector('div[data-view="entries"]');
    dataViewEntries.appendChild(addEntry(data.entries[i]));
  }
});

var showEntryView = document.getElementById('entries-nav');

showEntryView.addEventListener('click', function () {
  var entriesView = document.getElementById('entries-view');
  data.view = entriesView.getAttribute('data-view');
  switchViews();
});

var newEntryButton = document.querySelector('.new-entry');

newEntryButton.addEventListener('click', function () {
  var entryForm = document.getElementById('entry-form');
  data.view = entryForm.getAttribute('data-view');
  switchViews();
});

window.addEventListener('load', function checkEntries() {
  var hideNoEntryText = document.getElementById('no-entries');
  if (data.entries[0]) {
    hideNoEntryText.className = 'hidden';
  }
});

window.addEventListener('load', function loadView() {
  var viewElements = document.querySelectorAll('.view');
  for (var i = 0; i < viewElements.length; i++) {
    if (data.view === viewElements[i].getAttribute('data-view')) {
      viewElements[i].className = 'container view';
    } else {
      viewElements[i].className = 'container view hidden';
    }
  }
});

function switchViews() {
  var viewElements = document.querySelectorAll('.view');
  for (var i = 0; i < viewElements.length; i++) {
    if (data.view === viewElements[i].getAttribute('data-view')) {
      viewElements[i].className = 'container view';
    } else {
      viewElements[i].className = 'container hidden view';
    }
  }
}
