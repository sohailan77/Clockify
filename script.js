const tabs = document.querySelectorAll(".nav-tabs .tab")
const shadow = document.querySelector(".nav-tabs .shadow");
const sections = document.querySelectorAll("main section");


tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    shadow.style.transform = `translateX(${index * shadow.offsetWidth}px)`;

    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    sections.forEach((section) => section.classList.remove("visible"));
    if (sections[index]) {
      sections[index].classList.add("visible");
    }
  });
});