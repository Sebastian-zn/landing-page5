// Menu
const menu_btn = document.querySelector("#menu");

menu_btn.addEventListener("click", () => {
  const sidebar = document.querySelector("#sidebar");
  const icon = document.querySelector("#menu-icon");

  sidebar.classList.toggle("change");

  if (sidebar.classList.contains("change")) {
    icon.classList.replace("bi-list", "bi-x-lg");
    menu_btn.style.color = "#555";
  } else {
    icon.classList.replace("bi-x-lg", "bi-list");
    menu_btn.style.color = "#fff";
  }
});

// Back to top
const btn_to_top = document.querySelector('#btnBackToTop');

window.onscroll = () => {
  onScroll();
};

function onScroll() {
  if (document.body.scrollTop >= 30 || document.documentElement.scrollTop >= 30) {
    btn_to_top.style.display = "block";
  } else {
    btn_to_top.style.display = "none";
  }
}

btn_to_top.addEventListener('click', (e) => {
  e.preventDefault();
  
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
