import './App.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import BookList from './components/BookList'
import fantasy from './data/fantasy.json'
import { useState } from 'react';
/*import horror from './data/horror.json'*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/Registration';

/* Create a new Registration component on a new route /register and a new Link in the Navbar to get there. */
function App() {

  const [search, setSearch] = useState("")

  return (
    <BrowserRouter>
      <MyNavbar handleSearch = {setSearch}/>
      <Routes>
      <Route path='/' element={<BookList search={search} books={fantasy}/>}/>
      <Route path="/registration" element={<Registration />}/>
      </Routes>
      <MyFooter />
      </BrowserRouter>
  );
}

export default App;
