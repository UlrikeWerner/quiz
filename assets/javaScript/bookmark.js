function bookmarkToggle(bookmark) {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('marked');
  });
}

export { bookmarkToggle };
