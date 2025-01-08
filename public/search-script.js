import { userDatabase } from "./data/users.js";

let currentUser = null;
let currentPage = 1;
const ITEMS_PER_PAGE = 9;
let filteredUsers = [...userDatabase];

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  displayUsers(currentPage);
  updatePaginationControls();

  // Add real-time search listener
  document.getElementById("nameSearch").addEventListener("input", searchName);

  // Add event listeners for pagination buttons
  document.getElementById("nextPage").addEventListener("click", nextPage);
  document.getElementById("prevPage").addEventListener("click", previousPage);

  // Add event listener for clear search button
  document
    .querySelector(".search-result-content button.secondary")
    .addEventListener("click", clearSearch);

  // Add event listener for verify email popup
  document
    .getElementById("verifyButton")
    .addEventListener("click", () => showEmailPopup(currentUser?.id));

  // Add event listener for popup close button
  document
    .querySelector(".popup-content button.secondary")
    .addEventListener("click", closePopup);

  // Add event listener for verify email submit
  document
    .querySelector(".popup-content button:not(.secondary)")
    .addEventListener("click", verifyEmail);
});

function displayUsers(page) {
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const usersToDisplay = filteredUsers.slice(startIndex, endIndex);

  const directoryListing = document.getElementById("directoryListing");
  directoryListing.innerHTML = "";

  usersToDisplay.forEach((user) => {
    const userCard = createUserCard(user);
    directoryListing.appendChild(userCard);
  });
}

function createUserCard(user) {
  const card = document.createElement("div");
  card.className = "user-card";
  card.innerHTML = `
        <h3>${user.name}</h3>
        <p class="user-info"><i class="fas fa-briefcase"></i> ${user.position}</p>
        <p class="user-info"><i class="fas fa-building"></i> ${user.company}</p>
        <p class="user-info"><i class="fas fa-map-marker-alt"></i> ${user.location}</p>
        <button>
            <i class="fas fa-envelope"></i> Verify Email
        </button>
    `;

  // Add event listener to the verify email button
  const verifyButton = card.querySelector("button");
  verifyButton.addEventListener("click", () => showEmailPopup(user.id));

  return card;
}

function updatePaginationControls() {
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const pageInfo = document.getElementById("pageInfo");
  const prevButton = document.getElementById("prevPage");
  const nextButton = document.getElementById("nextPage");

  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;

  // Show/hide pagination based on results
  const paginationElement = document.querySelector(".pagination");
  paginationElement.style.display = totalPages <= 1 ? "none" : "flex";
}

function nextPage() {
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  if (currentPage < totalPages) {
    currentPage++;
    displayUsers(currentPage);
    updatePaginationControls();
  }
}

function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    displayUsers(currentPage);
    updatePaginationControls();
  }
}

function searchName() {
  const searchInput = document.getElementById("nameSearch").value.trim();
  const resultsSection = document.getElementById("searchResults");
  const foundName = document.getElementById("foundName");
  const notFoundMessage = document.getElementById("notFoundMessage");
  const verifyButton = document.getElementById("verifyButton");

  if (searchInput === "") {
    clearSearch();
    return;
  }

  // Update filtered users based on search
  filteredUsers = userDatabase.filter((u) =>
    u.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Reset to first page when searching
  currentPage = 1;

  if (filteredUsers.length > 0) {
    displayUsers(currentPage);
    foundName.textContent = `Found ${filteredUsers.length} matching results`;
    notFoundMessage.classList.add("hidden");
    resultsSection.classList.remove("hidden");
  } else {
    document.getElementById("directoryListing").innerHTML = "";
    foundName.textContent = "";
    notFoundMessage.classList.remove("hidden");
    verifyButton.classList.add("hidden");
    resultsSection.classList.remove("hidden");
  }

  updatePaginationControls();
}

function clearSearch() {
  document.getElementById("nameSearch").value = "";
  document.getElementById("searchResults").classList.add("hidden");
  filteredUsers = [...userDatabase]; // Reset to full database
  currentPage = 1;
  displayUsers(currentPage);
  updatePaginationControls();
}

function showEmailPopup(userId) {
  currentUser = userDatabase.find((u) => u.id === parseInt(userId));
  if (currentUser) {
    document.getElementById("emailPopup").classList.remove("hidden");
    document.getElementById("emailError").classList.add("hidden");
  }
}

function closePopup() {
  document.getElementById("emailPopup").classList.add("hidden");
}

function verifyEmail() {
  const emailInput = document.getElementById("emailInput").value.trim();
  const emailError = document.getElementById("emailError");

  if (!currentUser) {
    emailError.textContent = "Unauthorized access attempt";
    emailError.classList.remove("hidden");
    return;
  }

  if (emailInput === currentUser.email) {
    // Successful verification
    window.location.href = "powerball.html";
    // window.location.href = currentUser.accessUrl;
  } else {
    emailError.textContent = "Email doesn't match our records";
    emailError.classList.remove("hidden");
  }
}
