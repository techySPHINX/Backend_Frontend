import { useState,useEffect } from 'react';
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
     axios.get('/api/jokes')
     .then((response) => {
      setJokes(response.data)
     })  //as we cannot implement a large url like oclahost here so to implement by these two words we nedd to imply proxies
     .catch((error) => {
      console.log(error)
     })
  })
  return (
    <>
   <h1>Jagan Kumar Hotta</h1>
   <p>JOKES: {jokes.length}</p>

   {jokes.map((joke) => (
       <div key={joke.id}>
        <h3>{joke.question}</h3>
        <p >{joke.answer}</p>
       </div>
   ))}
    </>
  )
}

export default App
