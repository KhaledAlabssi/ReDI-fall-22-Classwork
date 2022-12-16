
import { useState } from 'react';
import './App.css';

function App() {
    const tests = [
        {
            question: '1how to build website for free?',
            answers: [
                'Learn how code',
                'Hire a friend',
                'Fake it till you make it',
                'Ask on LinkedIn'
            ],
            correctAnswer: 'Learn how code'
        },{
            question: '2how to build website for free?',
            answers: [
                'Learn how code',
                'Hire a friend',
                'Fake it till you make it',
                'Ask on LinkedIn'
            ],
            correctAnswer: 'Learn how code'
        },{
            question: '3how to build website for free?',
            answers: [
                'Learn how code',
                'Hire a friend',
                'Fake it till you make it',
                'Ask on LinkedIn'
            ],
            correctAnswer: 'Learn how code'
        },{
            question: '4how to build website for free?',
            answers: [
                'Learn how code',
                'Hire a friend',
                'Fake it till you make it',
                'Ask on LinkedIn'
            ],
            correctAnswer: 'Learn how code'
        },{
            question: '5how to build website for free?',
            answers: [
                'Learn how code',
                'Hire a friend',
                'Fake it till you make it',
                'Ask on LinkedIn'
            ],
            correctAnswer: 'Learn how code'
        }
    ]

    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    function advanceCurrentQuestion () {
      setCurrentQuestion(i => i+= 1)
    }
    function selectHandler (e) {
      console.log(e.target.textContent);
      if(e.target.textContent == tests[currentQuestion].correctAnswer) {
        setScore(i => i += 1)
      }
      setCurrentQuestion(i => i+= 1) //need to be limited to the tests.length

    }

  return (
    <div>
      <p>Score is: {score} | <span>question number {currentQuestion + 1} of 5 questions</span></p>
      
      
      <h2>{tests[currentQuestion].question}</h2>
      {tests[currentQuestion].answers.map(i => <p onClick={selectHandler}>{i}</p>)}
      
    <button onClick={advanceCurrentQuestion}>Next</button>
        

    </div>
  )
}
export default App;
