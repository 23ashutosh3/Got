import React, { useState } from 'react'
import axios from 'axios'

import Search from './components/Search'
import Results from './components/Results'
function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl = "https://www.anapioficeandfire.com/api/characters/" 
  const search = (e) => {
    if (e.key === "Enter") {
        axios(apiurl + state.s ).then(({ data }) => {
        console.log(data)
        setState(prevState => {
          return { ...prevState, results: data }
        })
      });
    }
  }
  const handleInput = (e) => {
    let s = e.target.value;
console.log(state.results);
    setState(prevState => {
      return { ...prevState, s: s }
    });
  }
  console.log(state.results);
  return (
    <div className="App">
      <header>
        <h1>Game Of Throne Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} />
      </main>
    </div>
  );
}
export default App
