import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Questions from './Questions';

const Ques = ({ name, score, question, setScore, setQuestion }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {

    console.log(question);

    setOptions(
      question &&
      handleShuffle([
        question[currQues]?.correct_answer,
        ...question[currQues]?.incorrect_answers,
      ])
    );
  }, [question,currQues]);
  console.log(options);

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  }

  return (
    <div className='quiz'>
      <span className='subtitle'>Welcome,{name}</span>

      {
        question ? (
          <>

            <div className='quizinfo'>
              <span>{question[currQues].category}</span>
              <span>Score : {score}</span>
            </div>
            <Questions
              currQues={currQues}
              setCurrQues={setCurrQues}
              question={question}
              options={options}
              correct={question[currQues]?.correct_answer}
              score={score}
              setScore={setScore}
              setQuestion={setQuestion}
            />
          </>
        ) : (
          <CircularProgress
            style={{ margin: 100 }}
            color="inherit"
            size={150}
            thickness={1}
          />
        )
      }


    </div>
  );
};

export default Ques;
