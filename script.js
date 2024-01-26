const section = document.querySelector(".nums"),
  nums = document.querySelectorAll(".num");
let done = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= section.offsetTop) {
    if (!done) {
      nums.forEach((num) => startCount(num));
    }
    done = true;
  }
});

function startCount(num) {
  const goal = num.dataset.goal;
  let step = 0;
  const count = setInterval(() => {
    step += goal / 4;
    num.textContent = step;
    if (num.textContent == goal) {
      clearInterval(count);
    }
  }, 50);
}
