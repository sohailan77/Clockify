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

// Stop watch functionality

const displayTimer = document.querySelector(".timer");
const startBtn = document.querySelector(".start-btn");
const restartBtn = document.querySelector(".restart-btn");

let [mins, secs, msecs] = [0, 0, 0];
let timerId = null;
let isRunning = false;

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    startBtn.innerHTML = `<i class="fa-solid fa-stop"></i>`;
    if (timerId !== null) {
      clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
  } else {
    isRunning = false;
    startBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    clearInterval(timerId);
  }
});

restartBtn.addEventListener("click", () => {
  clearInterval(timerId);
  isRunning = false;
  startBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  displayTimer.textContent = `00:00:00`;
  [mins, secs, msecs] = [0, 0, 0];
});

function startTimer() {
  msecs++;
  if (msecs == 100) {
    msecs = 0;
    secs++;

    if (secs == 60) {
      secs = 0;
      mins++;
    }
  }
  let msecString = msecs < 10 ? `0${msecs}` : msecs;
  let secString = secs < 10 ? `0${secs}` : secs;
  let minsString = mins < 10 ? `0${mins}` : mins;
  displayTimer.textContent = `${minsString}:${secString}:${msecString}`;
}
