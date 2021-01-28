var toDeleteIndex = "";

function loadCards() {
  let innerHTML = "";
  for (let index in blogs) {
    if (index % 2 === 0) {
      innerHTML += '<div class="cards-container">';
    }
    innerHTML += `
      <div class="card-container">
        <div class="name-title">
          <h4>${blogs[index].name}</h4>
        </div>
        <div class="blog-preview">
          <div class="icon-container">
            <strong>${blogs[index].title}</strong>
            <i class="fas fa-trash icon" onclick="deletePostPrompt(${index})"></i>
          </div>
          <p>${blogs[index].preview}</p>
          <div class="icon-container">
            <div></div>
            <i class="fas fa-ellipsis-h icon" onclick="loadPost(${index})"></i>
          </div>
        </div>
      </div>
    `;
    if (index % 2 !== 0) {
      innerHTML += "</div>";
    }
  }
  if (blogs.length % 2 === 0) {
    innerHTML += "</div>";
  }
  document.getElementById("page-container").innerHTML = innerHTML;
}

function deletePostPrompt(index) {
  toDeleteIndex = index;
  document.getElementsByClassName("modal")[0].style.display = "block";
}

function hideDeletePostPrompt() {
  document.getElementsByClassName("modal")[0].style.display = "none";
  toDeleteIndex = null;
}

function deletePost() {
  document.getElementsByClassName("modal")[0].style.display = "none";
  blogs.splice(toDeleteIndex, 1);
  loadCards();
  toDeleteIndex = null;
}

function loadPost(index) {
  sessionStorage.setItem("postIndex", index);
  window.location.href = "./post.html";
}

window.onload = () => {
  loadCards();
}