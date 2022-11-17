import Cards from '../components/cards.jsx';
import List from '../components/list.jsx';
import styles from '../styles/Home.module.css'

let limit = 10
let offset = 0

function Home({ pokemons }) {
  return (
    <List 
      pokemons = { pokemons } />
  ) 
}

export async function getStaticProps()  {
  let url = "https://pokeapi.co/api/v2/pokemon/?limit=" + limit + "&offset=" + offset
  const res = await fetch(url)
  let pokemons = await res.json()
  pokemons = pokemons.results?pokemons.results:null

  return {
    props: {
      pokemons
    }
  }
}

export default Home