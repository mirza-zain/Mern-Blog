import Navbar from "./components/Navbar";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article/:name" element={<Article />} />
          <Route path='/article-list' element={<ArticleList />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
