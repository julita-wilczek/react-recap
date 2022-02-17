import './App.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import BookList from './components/BookList'
import fantasy from './data/fantasy.json'
import { useState } from 'react';
/*import horror from './data/horror.json'*/


function App() {

  const [search, setSearch] = useState("")

  return (
    <>
      <MyNavbar handleSearch = {setSearch}/>
      <BookList search={search} books={fantasy}/>
      <MyFooter />
    </>
  );
}

export default App;
