const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostImageInput = newPostModal.querySelector("#card-image-input");
const newPostImageCaptionInput = newPostModal.querySelector(
  "#image-caption-input"
);

const profileNameE1 = document.querySelector(".profile__name");
const profileDescriptionE1 = document.querySelector(".profile__description");

const newPostImageE1 = document.querySelector(".card__image");
const newPostCaptionE1 = document.querySelector(".card__title");

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameE1.textContent;
  editProfileDescriptionInput.value = profileDescriptionE1.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameE1.textContent = editProfileNameInput.value;
  profileDescriptionE1.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  newPostImageE1.textContent = newPostImageInput.value;
  newPostCaptionE1.textContent = newPostImageCaptionInput.value;
  newPostModal.classList.remove("modal_is-opened");

  newPostForm.addEventListener("submit", handleNewPostSubmit);
}
