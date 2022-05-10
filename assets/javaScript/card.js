const bookmarks = document.getElementsByClassName("bookmark");

for (const bookmark of bookmarks) {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("marked");
  });
}

const buttons = document.getElementsByClassName("button");
const answers = document.getElementsByClassName("answer");

for (let i in buttons) {
  const btn = buttons[i];
  btn.addEventListener("click", () => {
    answers[i].classList.toggle("__hidden");
    if (btn.textContent === "Show Answer") {
      btn.textContent = "Hide Answer";
    } else {
      btn.textContent = "Show Answer";
    }
  });
}
