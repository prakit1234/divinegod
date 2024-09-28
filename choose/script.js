const bookButtons = document.querySelectorAll('.book-button');
let selectedBook = null;

bookButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (selectedBook) {
      selectedBook.style.backgroundColor = '#ffd700'; /* reset background color */
      selectedBook.style.color = '#000'; /* reset text color */
    }
    selectedBook = button;
    button.style.backgroundColor = '#fff'; /* highlight selected */
    button.style.color = '#ffd700'; /* highlight text */
    updateReadButton();
  });
});

function updateReadButton() {
  const readButtonContainer = document.getElementById('read-button-container');
  readButtonContainer.innerHTML = ''; // Clear previous button and text
  if (selectedBook) {
    const readButton = document.createElement('button');
    readButton.className = 'read-button';
    readButton.textContent = 'Read !!';
    readButton.addEventListener('click', () => {
      const url = selectedBook.getAttribute('data-url');
      window.location.href = url; // redirect to selected book's URL
    });
    readButtonContainer.appendChild(readButton);
    const selectedText = document.createElement('p');
    selectedText.textContent = 'You have selected ' + selectedBook.querySelector('p').textContent + '!';
    readButtonContainer.appendChild(selectedText);
  }
}
