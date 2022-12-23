import { useState } from "react";
import Question from "./Question";

const data = [
  {
    name: "HTML Test",
    code: "111",
    questions: [
      {
        question: "What is paragraph?",
        answers: ["<h1>", "text", "header", "<p>"],
        correctAnswer: "<p>",
      },
      {
        question: "What is Headings?",
        answers: ["<h1>", "text", "header", "<p>"],
        correctAnswer: "<h1>",
      },
      {
        question: "What is head?",
        answers: ["<h1>", "text", "header", "<head>"],
        correctAnswer: "<head>",
      },
    ],
  },
  {
    name: "CSS Test",
    code: "222",
    questions: [
      {
        question: "What is declariation?",
        answers: ["{}", "color:red", "initiation", "likning css in html"],
        correctAnswer: "{}",
      },
      {
        question: "What is styling?",
        answers: ["{}", "color:red", "initiation", "likning css in html"],
        correctAnswer: "color:red",
      },
      {
        question: "What is tag selector?",
        answers: ["p{}", "color:red", "initiation", "likning css in html"],
        correctAnswer: "p{}",
      },
    ],
  },
];
function App() {
  const [tests, setTests] = useState(data);
  const [score, setScore] = useState(0);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [code, setcode] = useState(null);
  const [test, settest] = useState(null);
  const [showScore, setShowScore] = useState(false)
  let alpha = ['a', 'b', 'c', 'd']

  function codeHandler(e) {
    e.preventDefault();
    setcode(e.target.input.value);
    let newTest = tests.filter((i) => i.code == e.target.input.value);
    settest((i) => newTest);
    e.target.input.value = "";
  }

  function checkAnswer(e) {
    if (test[0].questions[currQuestion].correctAnswer == e.target.textContent) {
      setScore((i) => (i += 1));
    }
    goNext();
  }

  function showScoreHandler () {
    setShowScore(i => !i)
  }

  function goNext() {
    let limit = test[0].questions.length;
    if (currQuestion + 1 < limit) {
      setCurrQuestion((i) => (i += 1)); //limit the next
    } else {
      alert("Test is over");
      return;
    }
  }
  return (
    <div className="app">
      {showScore && <p>Score: {score}</p>}
      <div className="card">
        <h1>Inter the code</h1>
        <form action="" onSubmit={codeHandler}>
          <input type="text" name="input" />
          <button type="submit">Start</button>
        </form>
      </div>

      {test != null && (
        <div>
          <h1>{test[0].questions[currQuestion].question}</h1>
          {test[0].questions[currQuestion].answers.map((i, j) => (
            <p onClick={checkAnswer}>{alpha[j]}. {i}</p>
          ))}
        </div>
      )}
      <button onClick={goNext}>Next</button>
      <button onClick={showScoreHandler}>Score changer</button>
    </div>
  );
}

export default App;
