const triviaApi = 'https://opentdb.com/api.php?amount=15&type=multiple';

export let questions;

export async function getQuestions() {
  try {
    const response = await fetch(triviaApi);
    const questionData = await response.json();
    questions = questionData.results;
  } catch (error) {
    console.error(error.message);
  }
}
