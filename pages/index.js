import List from '../components/list.jsx';
import Paginator from '../components/paginator.jsx';
import styles from '../styles/Home.module.css'

let limit = 10 // number by pages
let offset = 0 // max

function Home({ pokemons, total }) {
  return (
    <>
      <List 
        pokemons = { pokemons } 
      />
      <Paginator
        totalPages = { total }
        currentPage = { offset }
      />
    </>
    
  ) 
}

export async function getStaticProps()  {
  let url = "https://pokeapi.co/api/v2/pokemon/?limit=" + limit + "&offset=" + offset
  const res = await fetch(url)
  let pokemons = await res.json()
  let total = 0
  if(pokemons) {
    total = pokemons.count
  }

  pokemons = pokemons.results?pokemons.results:null

  return {
    props: {
      pokemons,
      total
    }
  }
}

export default Home