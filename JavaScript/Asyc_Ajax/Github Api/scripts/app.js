const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new IU();
const storageData = new StorageData();

addEventListener();

function addEventListener() {
  githubForm.addEventListener("submit", getData);
  clearLastUsers.addEventListener("click", clearAllSearched);
  document.addEventListener("DOMContentLoaded", getAllSearched);
}

function getData(e) {
  let username = nameInput.value.trim();
  if (username === "") {
    alert("Lütfen geçerli bir kullanıcı adı giriniz.");
  } else {
    github.getGithubData(username)
      .then(response => {
        if (response.user.message === "Not Found") {
          ui.showError("Kullanıcı Bulunamadı");
        } else {
          ui.addSearchedUserToUi(username);
          StorageData.addSearchedUserToStorage(username);
          ui.showUserInfo(response.user);
          ui.showRepoInfo(response.repo);
        }
      })
      .catch(err => ui.showError(err));
  }
  ui.clearInput(); // Clear input field
  e.preventDefault();
}

function clearAllSearched() {

}

function getAllSearched() {

}