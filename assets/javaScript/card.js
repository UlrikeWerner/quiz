const bookmarks = document.getElementsByClassName("bookmark");

for (const bookmark of bookmarks) {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("marked");
  });
}
