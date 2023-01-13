import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./header";
console.log(blogData);

function App() {
  return (
    <div className="App">
       <ArticleList posts="" />
       <About imgSrc="https://via.placeholder.com/215"  aboutText= "" />
       <Header name="OverReacted" />

    </div>
  );
}

export default App;
