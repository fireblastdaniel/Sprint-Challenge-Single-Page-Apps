import React, { useState } from "react";
import Header from "./components/Header.js";
import Navigation from './components/Navigation.js';
import WelcomePage from './components/WelcomePage.js';
import CharacterList from './components/CharacterList.js'
import SearchForm from './components/SearchForm.js';
import { Route } from 'react-router-dom';


export default function App() {
  const [filter, setFilter] = useState('');
  const handleChange = event => { setFilter(event.target.value) }
  return (
    <main>
      <Navigation />
      <SearchForm handleChange={handleChange}/>
      <Header />

      <Route exact path='/' component={WelcomePage} />
      <Route 
        path='/characters' 
        render={ (props) => <CharacterList filter={filter}/> } 
      />
    </main>
  );
}
