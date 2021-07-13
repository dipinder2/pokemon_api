import './App.css';
import {useState,useEffect} from 'react'

function App() {
  const [pokemonNames,setPokemonNames] = useState([]);
  const [clicked,setClicked] = useState(false);
  const handleClick = () =>{
    setClicked(true);
    fetch("https://pokeapi.co/api/v2/pokemon?limit=810")
            .then(response => {
              return response.json();
          }).then(response => {
              const names = response.results.map(pokemon=>{
                return pokemon.name
              }); 
              setPokemonNames([...names])
          }).catch(err=>{
              console.log(err);
          });
  }



  return (
    <div className="container">
    {
      clicked
      ?<button className="btn btn-default btn-sml" disabled onClick={handleClick}>Fetch Pokemons</button>
      :<button className="btn btn-default btn-sml" onClick={handleClick}>Fetch Pokemons</button>
    }
    <ul className="list-group">
    {
      pokemonNames.map(pokemon=><li className="list-group-item">{pokemon}</li>)
    }
    </ul>
    </div>
  );
}

export default App;
