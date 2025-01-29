// Get all video items
const videoItems = document.querySelectorAll(".gallery-video-item");
const modalOverlay = document.querySelector(".video-modal-overlay");

videoItems.forEach((item) => {
  const thumbnail = item.querySelector(".gallery-video-thumbnail");
  thumbnail.addEventListener("click", () => {
    const videoModal = item.querySelector(".video-modal");
    videoModal.classList.add("active");
    modalOverlay.classList.add("active");
  });
});

// Close modal when clicking outside
modalOverlay.addEventListener("click", () => {
  const activeModal = document.querySelector(".video-modal.active");
  if (activeModal) {
    activeModal.classList.remove("active");
    modalOverlay.classList.remove("active");
  }
});