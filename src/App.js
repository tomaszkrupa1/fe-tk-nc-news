import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header></header>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
