
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/homePage/Home';
import MovieList from './components/movieList/movieList';
import MovieDetail from './pages/movieDetail/mdetailPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="movie/:id" element={<MovieDetail />}></Route>
            <Route path="movies/:type" element={<MovieList />}></Route>
            <Route path="/*" element={<h1>Page Not Found</h1>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
