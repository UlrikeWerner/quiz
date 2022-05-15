export function addQuestionEventListener(
  questionInputElement,
  lengthOutputElement
) {
  questionInputElement.addEventListener('keyup', () => {
    lengthOutputElement.value = questionInputElement.value.length;
    if (lengthOutputElement.value !== '' && lengthOutputElement.value !== '0') {
      lengthOutputElement.classList.add('question-length--visible');
    } else {
      lengthOutputElement.classList.remove('question-length--visible');
    }
  });
}
