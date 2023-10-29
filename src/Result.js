import { Button } from "@mui/material";
import React from "react";

const Result =({score,name})=>{


    return (
    
    <div>
    
<span className="result">
    <div className="score">Quiz is completed!</div>
   <h1> Final Score : {score}</h1>
    
    <Button
    variant="contained"
    color="secondary"
    size="large"
    style={{alignSelf:"center",marginTop:20}}
    href="/"
    >
Go To HomePage
    </Button>
</span>

    </div>
    );
}

export default Result;