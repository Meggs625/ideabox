// document.querySelectors()

var titleInput = document.querySelector('.title');
var bodyInput = document.querySelector('.body');
var buttonSave = document.querySelector('.save-button');
var titleOutput = document.querySelector('h3');
var bodyOutput = document.querySelector('.body-text');
var cardDisplay = document.querySelector('.idea-display');
var ideaInput = document.querySelector('.title-label');
var buttonDelete = document.querySelector('.delete-icon');
var buttonNotFavorite = document.querySelector('.star');

// global variables

var ideaList = []
var testIdea;

// event Listeners!
window.addEventListener('load', getIdeasFromLocalStorage);
buttonSave.addEventListener('click', saveIdea);
ideaInput.addEventListener('input', verifyInput);
cardDisplay.addEventListener('click', function(event) {
  deleteIdea(event)});
cardDisplay.addEventListener('click', function(event) {
  favoriteIdea(event)});
cardDisplay.addEventListener('click', function(event) {
  removeIdea(event)});


// Functions
function getIdeasFromLocalStorage() {
  ideaList = JSON.parse(localStorage.getItem('data'));
  if (ideaList) {
    console.log(ideaList);
    renderIdeas();
  }
}
function verifyInput() {
 if (titleInput.value && bodyInput.value) {
   buttonSave.disabled = false;
   buttonSave.classList.remove('no-button');
 } else {
   buttonSave.classList.add('no-button');
   buttonSave.disabled = true;
 }
}

function saveIdea(event) {
  event.preventDefault();
  testIdea = new Idea (titleInput.value, bodyInput.value);
  ideaList.push(testIdea);
  testIdea.saveToStorage();
  renderIdeas();
}

function renderIdeas() {
  // debugger
  cardDisplay.innerHTML = ''
  for (var i = 0; i < ideaList.length; i++) {
     cardDisplay.innerHTML += `<article class="idea-box">
    <header>
      <img src="./assets/star.svg" class="star" alt="star" id="${ideaList[i].id}">
      <img src="./assets/delete.svg" class="delete-icon" id="${ideaList[i].id}" alt="delete-icon">
    </header>
    <div class="idea-body">
      <h3>${ideaList[i].title}</h3>
      <p class="body-text">${ideaList[i].body}</p>
    </div>
    <footer>
      <img src="./assets/comment.svg" class="add-comment" alt="add-comment">
      <p class="comment">Comment</p>
    </footer>
  </article>`
  }
  titleInput.value = ''
  bodyInput.value = ''
  verifyInput();
}

function deleteIdea(event) {
  if (event.target.className === 'delete-icon') {
    removeIdea(event);
    renderIdeas();
}
}
function removeIdea(event) {
  for (var i = 0; i < ideaList.length; i++) {
    if (ideaList[i].id === event.target.id) {
      ideaList.splice(i, 1);
    }
  }
}//   if (ideaList[i].id === number)

//
//   }
// }
// for loop id of clicked === id of index in arry then splice(i,1)
// localStorage.removeItem.id
function favoriteIdea(event) {
  if (event.target.className === 'star') {
    event.target.src = './assets/star-active.svg';
    event.target.classList.add('active');
  } else if (event.target.className === 'star active') {
    event.target.src = './assets/star.svg';
    event.target.classList.remove('active');
  }
}
