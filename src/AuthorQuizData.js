import {shuffle, sample} from "underscore";

const authors = [
  {
    name: "Revanth Makkena",
    imageUrl: "../public/logo192.png",
    imageSource: "Photo Gallery",
    books: ["Book 1 - Mighty Monkey", "Book 2 - Dangerous Paths"],
  },
  {
    name: "J.K. Rowling",
    imageUrl: "../public/logo192.png",
    imageSource: "Photo Gallery",
    books: [
      "Harry Potter 1",
      "Harry Potter - Prisoner of Azkaban",
      "Harry Potter and the Deathly Hollows",
    ],
  },
  {
    name: "Amish Tripati",
    imageUrl: "../public/logo192.png",
    imageSource: "Photo Gallery",
    books: ["The Oath of Vayuputras", "The Battle of the Immortals"],
  },
  {
    name: "William Shakespeare",
    imageUrl: "../public/logo192.png",
    imageSource: "Photo Gallery",
    books: ["Hamlet", "Romeo and Juliet"],
  },
];

function getTurnData(authors) {
  const allBooks = authors.reduce(function (p, c, i) {
    return p.concat(c.books);
  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);
  // console.log(answer);
  return {
    books: fourRandomBooks,
    author: authors.find((author) =>
      author.books.some((title) => title === answer)
    ),
  };
}

const currState = {
  turnData: getTurnData(authors),
  highlight: "",
};

function onAnswerSelected(answer) {
  console.log(answer);
  const isCorrect = currState.turnData.author.books.some(
    (book) => book === answer
  );
  currState.highlight = isCorrect ? "correct" : "wrong";
}

export {currState, onAnswerSelected};
