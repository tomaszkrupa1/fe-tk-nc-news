import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import { Route, Routes } from "react-router-dom";
import { SingleArticle } from "./components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />}></Route>
        <Route path="/articles/:articleId" element={<SingleArticle />}></Route>
      </Routes>
    </div>
  );
}

export default App;
