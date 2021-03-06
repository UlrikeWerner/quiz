const triviaApi = 'https://opentdb.com/api.php?amount=15&type=multiple';

export let questions = [];

export async function getQuestions() {
  try {
    const response = await fetch(triviaApi);
    const questionData = await response.json();
    // questions = questionData.results;
    createDataArray(questionData.results);
  } catch (error) {
    console.error(error.message);
  }
}

function createDataArray(apiQuestions) {
  apiQuestions.forEach(question => {
    const newQuestion = {
      isMarked: false,
      question: decodeHtml(question.question),
      answer: decodeHtml(question.correct_answer),
      difficulty: question.difficulty,
      tags: [question.category],
    };
    addQuestion(newQuestion);
  });
}

function decodeHtml(value) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = value;
  return textArea.value;
}

export function addQuestion(question) {
  questions = [question, ...questions];
}
