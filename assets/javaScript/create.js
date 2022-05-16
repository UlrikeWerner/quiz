export function addEventListenerToTextField(
  questionInputElement,
  lengthOutputElement
) {
  questionInputElement.addEventListener('keyup', () => {
    const inputLength = questionInputElement.value.length;
    lengthOutputElement.value = 'Character: ' + inputLength;
    if (inputLength !== 0) {
      lengthOutputElement.classList.add('create-length--visible');
    } else {
      lengthOutputElement.classList.remove('create-length--visible');
    }
  });
}
