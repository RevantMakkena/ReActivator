import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AuthorQuiz from "./AuthorQuiz/AuthorQuiz";
import {shuffle, sample} from "underscore";
// import {currState, onAnswerSelected} from "./AuthorQuizData";

//#region  Data for Author Quiz

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
  debugger;
  console.log(answer);
  const isCorrect = currState.turnData.author.books.some(
    (book) => book === answer
  );
  currState.highlight = isCorrect ? "correct" : "wrong";
  Render();
}
//#endregion

function Render() {
  ReactDOM.render(
    <React.StrictMode>
      <>
        <AuthorQuiz
          {...currState}
          onAnswerSelected={onAnswerSelected}
        />
      </>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

Render();
//#region
// const authors = [
//   {
//     name: "Revanth Makkena",
//     imageUrl: "../public/logo192.png",
//     imageSource: "Photo Gallery",
//     books: ["Book 1 - Mighty Monkey", "Book 2 - Dangerous Paths"],
//   },
//   {
//     name: "J.K. Rowling",
//     imageUrl: "../public/logo192.png",
//     imageSource: "Photo Gallery",
//     books: [
//       "Harry Potter 1",
//       "Harry Potter - Prisoner of Azkaban",
//       "Harry Potter and the Deathly Hollows",
//     ],
//   },
//   {
//     name: "Amish Tripati",
//     imageUrl: "../public/logo192.png",
//     imageSource: "Photo Gallery",
//     books: ["The Oath of Vayuputras", "The Battle of the Immortals"],
//   },
//   {
//     name: "William Shakespeare",
//     imageUrl: "../public/logo192.png",
//     imageSource: "Photo Gallery",
//     books: ["Hamlet", "Romeo and Juliet"],
//   },
// ];

// function getTurnData(authors) {
//   const allBooks = authors.reduce(function (p, c, i) {
//     // console.log("p is " + p);
//     // console.log("c is " + JSON.stringify(c));
//     // console.log("i is " + i);
//     return p.concat(c.books);
//   }, []);
//   const fourRandomBooks = shuffle(allBooks).slice(0, 4);
//   const answer = sample(fourRandomBooks);
//   // console.log(answer);
//   return {
//     books: fourRandomBooks,
//     author: authors.find((author) =>
//       author.books.some((title) => title === answer)
//     ),
//   };
// }

// const currState = {
//   turnData: getTurnData(authors),
//   highlight: "",
// };

// function onAnswerSelected(answer) {
//   const isCorrect = currState.turnData.author.books.some(
//     (book) => book === answer
//   );
//   currState.highlight = isCorrect ? "correct" : "wrong";
//   Render();
// }

//#endregion
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
