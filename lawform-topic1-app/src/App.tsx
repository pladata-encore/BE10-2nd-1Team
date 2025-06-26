import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";

import "./style/topic1.css";
import "./index.css";
import Proof from "./section/Proof.tsx";
import Question from "./section/Question.tsx";
import Situation from "./section/Situation.tsx";
import Contents from "./section/Contents.tsx";
import Review from "./section/Review.tsx";
import Category from "./section/Category.tsx";
import Write from "./section/Write.tsx";


const App = () => {

    return (
        // <Provider store={store}
        <div className="min-w-[320px]">
            <Proof/>
            <Question/>
            <Situation/>
            <Contents/>
            <Review/>
            <Category/>
            <Write/>
        </div>
        // </Provider>
    )

};

export default App
