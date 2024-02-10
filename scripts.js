// Add this to your existing JavaScript or in a new script tag

function showProject(title, imageUrl, description) {
  var projectModal = document.getElementById("projectModal");
  var projectTitle = document.getElementById("projectTitle");
  var projectImage = document.getElementById("projectImage");
  var projectDescription = document.getElementById("projectDescription");

  projectTitle.textContent = title;
  projectImage.src = imageUrl;
  projectDescription.textContent = description;

  projectModal.style.display = "block";
}

function hideProject() {
  var projectModal = document.getElementById("projectModal");
  projectModal.style.display = "none";
}
// Add this JavaScript for modal functionality
function openModal(modalId) {
  var modal = document.getElementById(modalId + "Modal");
  modal.style.display = "block";
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId + "Modal");
  modal.style.display = "none";
}
