import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import { Categories } from './Data';
import { Button, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorMessage from './ErrorMessage';
import Ques from './Ques';

const Home = ({ name, setName, fetchQuestions }) => {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
            setError(true);
            return;
        }
        else {
            setError(false);
            console.log(category,difficulty);
            fetchQuestions(10,category, difficulty);
            navigate("/ques");
            
        }
    }

    return (
        <div className="content">
            <div className="setting">
                <span style={{ fontSize: 30 }}>Quiz Settings</span>

                <div className="setting_select">
                    {error && <ErrorMessage>Please Fill The Fields</ErrorMessage>}
                    <TextField
                        style={{ marginBottom: 25 }}
                        label="Enter Your Name"
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                    id='category'
                        select label="Select Category"
                        variant="outlined"
                        style={{ marginBottom: 30 }}
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    >
                        {
                            Categories.map((cat) => (
                                <MenuItem key={cat.category} value={cat.value}>
                                    {cat.category}
                                </MenuItem>
                            ))
                        }

                    </TextField>

                    <TextField
                    id="difficulty"
                        select
                        label="Select Difficulty"
                        variant="outlined"
                        style={{ marginBottom: 30 }}
                        onChange={(e) => setDifficulty(e.target.value)}
                        value={difficulty}
                    >

                        <MenuItem key="easy" value="easy">easy</MenuItem>
                        <MenuItem key="medium" value="medium">medium</MenuItem>
                        <MenuItem key="hard" value="hard">hard</MenuItem>

                    </TextField>

                    <Button variant="contained" color="primary" size='large'
                        onClick={handleSubmit}>
                        Start Quiz
                    </Button>
                </div>
            </div>
            {/* <img src='https://media.istockphoto.com/id/1252494221/photo/thinking-child-boy-on-black-background-with-light-bulb-and-question-marks-brainstorming-and.jpg?s=612x612&w=0&k=20&c=jLTFW225OA4TlnzjhZCFLA43_s38PZIUO1cz5pC0hYs=' className="image"/> */}
            <img src="https://media.istockphoto.com/id/1255572283/vector/boy-with-laptop-happy-man-well-being-businessman-creative-people-working-at-home-office.jpg?s=612x612&w=0&k=20&c=fIgnO0OcdkWklqw43yGTDxEkLhL5VnR1EGZ3QbusVYA=" />
            {/* <img src="istockphoto-1255572283-612x612-removebg-preview.png"/> */}
        </div>
    );
}

export default Home;