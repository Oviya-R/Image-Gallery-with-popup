function openPopup(src) {
  const popup = document.getElementById("popup");
  const popupImage = document.getElementById("popupImage");
  popupImage.src = src;
  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
