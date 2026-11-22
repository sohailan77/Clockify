const tabs = document.querySelectorAll(".nav-tabs .tab");
const shadow = document.querySelector(".nav-tabs .shadow");
const sections = document.querySelectorAll("main section");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    shadow.style.transform = `translateX(${index * shadow.offsetWidth}px)`;

    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    sections.forEach((section) => section.classList.remove("visible"));

    sections[index].classList.add("visible");
  });
});

// Analog clock functionality

const hour = document.querySelector("#hour");
const min = document.querySelector("#minute");
const sec = document.querySelector("#second");
const displayDate = document.querySelector(".date");

setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();

  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  min.style.transform = `rotate(${mrotation}deg)`;
  sec.style.transform = `rotate(${srotation}deg)`;
  day = d.toLocaleString("en-IN", { weekday: "long" });
  date = d.toLocaleString("en-IN", { day: "numeric" });
  month = d.toLocaleString("en-IN", { month: "short" });

  displayDate.innerText = `${month} ${date} ${day}`;
}, 1000);
