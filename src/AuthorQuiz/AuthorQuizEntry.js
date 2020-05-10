import React from "react";
import AuthorQuiz from "./AuthorQuiz";
//import {currState, onAnswerSelected} from "../AuthorQuizData";
import {shuffle, sample} from "underscore";
import Render from "../index";
import AddNewAuthor from "./AddNewAuthor";
// import {Link} from "react-router-dom";
//withRouter is useful to push the application back - Like history

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
  const allBooks = authors.reduce(function (total, current, index) {
    console.log(
      `Total is ${JSON.stringify(
        total
      )} , Current is ${JSON.stringify(current)}, Index is ${index}`
    );
    return total.concat(current.books);
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

let currState = resetState();

function resetState() {
  return {
    turnData: getTurnData(authors),
    highlight: "",
  };
}
function onAnswerSelected(answer) {
  debugger;
  console.log(answer);
  const isCorrect = currState.turnData.author.books.some(
    (book) => book === answer
  );
  currState.highlight = isCorrect ? "correct" : "wrong";
  Render();
}

function onAddAuthor(author) {
  authors.push(author);
}

//#endregion

function AuthorQuizEntry() {
  return (
    <div>
      {/* <button className='btn-dark btn-block'>
        <Link to='/add'>Add New Author</Link>
      </button> */}
      <AuthorQuiz
        {...currState}
        onAnswerSelected={onAnswerSelected}
        onContinue={() => {
          currState = resetState();
          Render();
        }}
      />
      <AddNewAuthor onAddAuthor={onAddAuthor} />
    </div>
  );
}

export default AuthorQuizEntry;
