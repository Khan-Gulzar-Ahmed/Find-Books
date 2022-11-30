import Reat, { useState } from "react";
import "./styles.css";

export default function App() {
  const myBooks = {
    javascript: [
      {
        name: "JavaScript The Good Parts",
        desc: "Easy to learns Coding with these books",
        rating: "4.2/5"
      },
      {
        name: "Eloquent JavaScript",
        desc: "Easy to learns Coding with these books",
        rating: "4.1/5"
      },
      {
        name: "Be Better With New JS",
        desc: "Easy to learns Coding with these books",
        rating: "4.3/5"
      }
    ],
    php: [
      {
        name: "Learning PHP, MySQL, and JavaScript",
        desc: "Easy to learns Coding with these books",
        rating: "3.8/5"
      },
      {
        name: "PHP and MySQL Web Development",
        desc: "Easy to learns Coding with these books",
        rating: "3.9/5"
      },
      {
        name: "PHP for Beginners",
        desc: "Easy to learns Coding with these books",
        rating: "4.1/5"
      }
    ],
    css: [
      {
        name: "Responsive Web Design with HTML5 and CSS",
        desc: "Easy to learns Coding with these books",
        rating: "4.5/5"
      },
      {
        name: "HTML & CSS: The Complete Reference",
        desc: "Easy to learns Coding with these books",
        rating: "4.4/5"
      },
      {
        name: "Fun With CSS",
        desc: "Easy to learns Coding with these books",
        rating: "3.8/5"
      }
    ]
  };

  var [selectedBook, setbook] = useState("javascript");

  function clickHandler(type) {
    setbook(type);
  }
  useState(selectedBook);

  return (
    <div className="App">
      <h1>Find the Books</h1>
      <h2>Find the diffrent books based on rating !</h2>

      <div className="container">
        <h1>Click on Tab for books</h1>
        <h4>Checkout my favorite books. Select a genre to get books</h4>
        <br />
        <div>
          {Object.keys(myBooks).map((type) => (
            <button onClick={() => clickHandler(type)}>{type}</button>
          ))}
        </div>
        <br />
        <hr />

        <div>
          <ul>
            {myBooks[selectedBook].map((book) => (
              <li key={book.name}>
                <div style={{ fontSize: "larger" }}> {book.name} </div>

                <i>
                  <div style={{ fontSize: "smaller" }}> {book.desc} </div>
                </i>
                <div style={{ fontSize: "smaller" }}>
                  Rating : {book.rating}{" "}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
