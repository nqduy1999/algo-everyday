// async function asyncFunction() {
//   const result = await new Promise((resolve) => {
//     setTimeout(() => resolve("Done!"), 1000);
//   });
//   console.log(result);
// }

// function* fetchData() {
//   console.log("Fetching data...");
//   yield new Promise((resolve) => setTimeout(() => resolve("Data 1"), 1000));
//   yield new Promise((resolve) => setTimeout(() => resolve("Data 2"), 1000));
// }

// const gen = fetchData();

// gen.next().value.then((value) => console.log(value));

const CorrectAnswer = ["A", "B", "D", "C", "A"];

const ListAnswers = [
  ["A", "C", "D", "A", "A"],
  ["A", "C", "D", "C", "A"],
  ["A", "C", "A", "C", "C"],
  ["B", "C", "C", "B", "C"],
  ["A", "C", "D", "A", "C"],
  ["B", "C", "D", "A", "C"],
  ["A", "C", "D", "A", "C"],
];

const checkfrequentlyAnswer = () => {
  let hashmap = {}; //

  for (const index in CorrectAnswer) {
    hashmap[index] = {
      value: CorrectAnswer[index],
      remaining: ListAnswers.length,
    };
  }
  for (const answerByUser of ListAnswers) {
    for (let i = 0; i < answerByUser.length; i++) {
      if (hashmap[i].value === answerByUser[i]) {
        hashmap[i].remaining--;
      }
    }
  }
  const sortArrays = Object.values(hashmap).sort(
    (a, b) => a.remaining - b.remaining
  );

  return sortArrays?.[0]?.value;
};

console.log(checkfrequentlyAnswer());
