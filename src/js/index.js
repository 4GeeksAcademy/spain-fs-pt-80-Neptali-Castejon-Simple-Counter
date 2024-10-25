//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

export let counter = 0;

setInterval(() => {
    const digits = [];
    let tempCounter = counter;

    while (tempCounter > 0) {
        digits.unshift(tempCounter % 10);
        tempCounter = Math.floor(tempCounter / 10);
    }

    while (digits.length < 6) {
        digits.unshift(0);
    }

    ReactDOM.createRoot(document.getElementById('app')).render(
        <Home digits={digits} />
    );

    counter++;
}, 1000);

