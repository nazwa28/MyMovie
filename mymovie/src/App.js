import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import   NavScrollExample from './components/navbar/Navbar';
// import   Header from './components/navbar/Navbar';
import Home from './pages/homePage/Home';
import MovieList from './components/movieList/movieList';
import MovieDetail from './pages/movieDetail/mdetailPage';
import Footer from './components/footer/Footer';
import loginPage from './components/navbar/loginPage';

function App() {
  return (
    <div className="App">
      <>
     
      <Router>
      <NavScrollExample/>
      {/* <Header /> */}
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="movie/:id" element={<MovieDetail />}></Route>
            <Route path="movies/:type" element={<MovieList />}></Route>
            <Route path="/*" element={<h1>Page Not Found</h1>}></Route>
          </Routes>
          {/* <MovieList /> */}
        <Footer />
      </Router>
      </>

    </div>
  );
}

export default App;
