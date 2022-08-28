import React from 'react';
import quotes from '../quotes.json'
import { useState } from 'react'
import ThirdComponent from './ThirdComponent';

const QuoteBox = () => {
    let color = ["#C3C3C3", "#FFC4D3", "#FFDA88", "#909BA3", "#303030", "#8685EF", "#474554", "#FF00FF"];
    let indexRandom = Math.floor(Math.random() * color.length);

    const randimIndex = (Math.floor(Math.random() * quotes.length)) 
    const [position, setPosition] = useState(randimIndex);
    
    const change = () =>{
        let indexRandom = Math.floor(Math.random() * color.length);
        document.body.style = `background: ${color[indexRandom]}`
        document.body.style.color = color[indexRandom]
        setPosition((Math.floor(Math.random() * quotes.length)))
    }
    
    document.body.style = `background: ${color[indexRandom]}`
    document.body.style.color = color[indexRandom]
    
    return (
        <div className="quoteBox">
            <div className="container">
                <div className="phrase">
                    <i className="fa-solid fa-quote-left"></i>
                    <p>{quotes[position].quote}</p>
                    
                </div>
                <div className="next">
                    <h4>{quotes[position].author}</h4>
                    <ThirdComponent  change = {change}/>
                </div>
            </div>
        </div>
    );
};

export default QuoteBox;