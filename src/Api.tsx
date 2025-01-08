export enum Difficulty {
  HARD = "hard",
  EASY = "easy",
  MEDium = "medium",
}

export const fetchQuestion = async (amount: number, difficulty: Difficulty) => {
  const endPoint = `https://opentdb.com/api.php?amount=${amount}&&difficulty=${difficulty}`;
  const data = await (await fetch(endPoint)).json();
  console.log(data);
};
