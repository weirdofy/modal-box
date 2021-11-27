let homeBtn = document.querySelector(".home-button"),
  modalItems = [
    (modalBox = document.querySelector(".modal-box")),
    (modalContentBox = document.querySelector(".modal-content-box")),
    (modalBg = document.querySelector(".modal-bg")),
    (modalCloseBtn = document.querySelector(".modal-close")),
  ];

homeBtn.addEventListener("click", () => {
  modalItems.forEach((item) => {
    item.classList.add("modal-open");
  });

  modalCloseBtn.addEventListener("click", () => {
    modalItems.forEach((item) => {
      item.classList.remove("modal-open");
    });
  });
});
