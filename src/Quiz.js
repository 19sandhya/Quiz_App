import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './Quiz.css';
import Header from './Header';
import Home from './Home';
import Ques from './Ques';
import Result from './Result';
import axios from "axios";



const Quiz = () => {
    const [name, setName] = useState("");
    const [question, setQuestion] = useState("");
    const [score, setScore] = useState(0);



const fetchQuestions = async (amount, category, difficulty) => {
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch questions. Status: ${response.status}`);
      }
  
      const data = await response.json();
      // console.log(data.results);
      setQuestion(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  
 
    return (
        <>
            <BrowserRouter>
                <div className="app" >
                    <Header />

                    <Routes>

                        <Route path='/' element={<Home name={name} setName={setName}
                            fetchQuestions={fetchQuestions} />} exact />
                        <Route path='/ques' element={<Ques 
                          name={name}
                          question={question}
                          score={score}
                          setScore={setScore}
                          setQuestion={setQuestion}
                        />} exact />
                        <Route path='/result' element={<Result 
                          score={score}
                          name={name}
                        />} exact />

                    </Routes>

                </div>
            </BrowserRouter>

        </>
    );
}

export default Quiz;
