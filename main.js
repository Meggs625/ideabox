// document.querySelectors()

var titleInput = document.querySelector('.title');
var bodyInput = document.querySelector('.body');
var buttonSave = document.querySelector('.save-button');
var titleOutput = document.querySelector('h3');
var bodyOutput = document.querySelector('.body-text');
var cardDisplay = document.querySelector('.idea-display');
var ideaInput = document.querySelector('.title-label');

// global variables


// event Listeners!
window.onload = (cardDisplay.innerHTML = '');
buttonSave.addEventListener('hover', verifyInput);
buttonSave.addEventListener('click', createNewIdea);
ideaInput.addEventListener('input', verifyInput);



// Functions
function verifyInput() {
  console.log('are we here!');
 if (titleInput.value && bodyInput.value) {
   buttonSave.disabled = false;
   buttonSave.classList.remove('no-button');
  }
}

function createNewIdea(event) {
  event.preventDefault()
  //buttonSave.disabled = true;
  console.log('did I get here?');
  if (titleInput.value && bodyInput.value) {
    buttonSave.disabled = false;
    cardDisplay.innerHTML += `<article class="idea-box">
    <header>
      <img src="./assets/star.svg" class="star" alt="star">
      <img src="./assets/star-active.svg" class="star-checked" alt="star-checked">
      <img src="./assets/delete.svg" class="delete-icon" alt="delete-icon">
    </header>
    <div class="idea-body">
      <h3>${titleInput.value}</h3>
      <p class="body-text">${bodyInput.value}</p>
    </div>
    <footer>
      <img src="./assets/comment.svg" class="add-comment" alt="add-comment">
      <p class="comment">Comment</p>
    </footer>
  </article>`
  }
    console.log('did I get here?');

  titleInput.value = ''
  bodyInput.value = ''
}
// if titleInput.value || bodyInput.value === undefined
// then classList.add ${save button??} hover
