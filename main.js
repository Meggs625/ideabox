// document.querySelectors()

var titleInput = document.querySelector('.title');
var bodyInput = document.querySelector('.body');
var buttonSave = document.querySelector('.save-button');
var titleOutput = document.querySelector('h3');
var bodyOutput = document.querySelector('.body-text');
var cardDisplay = document.querySelector('.idea-display');


// global variables


// event Listeners!

buttonSave.addEventListener('click', createNewIdea);

// Functions
function createNewIdea(event) {
  event.preventDefault()
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

  titleInput.value = ''
  bodyInput.value = ''
}
