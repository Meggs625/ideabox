class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }

  saveToStorage() {
    var key = JSON.stringify(this.id);
    var strungIdea = JSON.stringify(this);
    localStorage.setItem(key, strungIdea);
    // have to add something in here to put saved idea cards on page
  }
  deleteFromStorage(id) {
    console.log("we here");
  // for loop???
    var key = JSON.stringify(this.id);
    localStorage.remove(key);
  }
  updateIdea() {

  }
}
