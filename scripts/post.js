function loadPost() {
  const postIndex = sessionStorage.getItem("postIndex");
  const selectedBlog = blogs[postIndex];
  document.getElementById("post-heading").innerHTML = selectedBlog.title;
  document.getElementById("name-label").innerHTML = selectedBlog.name;
  document.getElementById("post-content").innerHTML = selectedBlog.blog;
}

const headingElement = document.getElementById("post-heading");
const contentElement = document.getElementById("post-content");
const editBtnElement = document.getElementById("edit-button");
const saveBtnElement = document.getElementById("save-button");
const likeBtnElement = document.getElementById("like-btn");
const likeLabelElement = document.getElementById("like-label");
const commentsElement = document.getElementById("comments");
const commentsAreaElement = document.getElementById("comment-area");


let likeCount = 0;

function startEditing() {

  editBtnElement.style.display = "none";
  saveBtnElement.style.display = "block";

  headingElement.classList.add("red-border");
  headingElement.setAttribute("contenteditable", true);

  contentElement.classList.add("red-border");
  contentElement.setAttribute("contenteditable", true);
}

function savePost() {
  editBtnElement.style.display = "block"
  saveBtnElement.style.display = "none";

  headingElement.classList.remove("red-border");
  headingElement.setAttribute("contenteditable", false);

  contentElement.classList.remove("red-border");
  contentElement.setAttribute("contenteditable", false);
}

function addComment() {
  const comment = commentsAreaElement.value;
  commentsElement.style.display = "block";
  if (comment) {
    commentsElement.innerHTML += `
      <p class="comment">${comment}</p>
    `;
    commentsAreaElement.value = "";
  }
}

function addLike() {
  likeCount++;
  if (likeCount === 1) {
    let likeLabelText = likeBtnElement.innerHTML;
    likeBtnElement.innerHTML = likeLabelText.replace("Like", "Liked!")
    likeLabelElement.innerHTML = "1 person likes this!";
  } else {
    likeLabelElement.innerHTML = likeCount + " people like this!";
  }
}

loadPost();