// mengambil nav-link
const navLink = document.querySelectorAll(".nav-link");
// apabila salah satu nav-link di klik, jalankan fungsi activate
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    activate(link);
  });
});

function activate(link) {
  const linkActive = document.querySelector(".active");
  if (!link.classList.contains("active")) {
    linkActive.classList.remove("active");
    link.classList.add("active");
  }
}
