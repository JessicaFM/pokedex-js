import useOffset from '../hooks/useOffset.jsx';
import List from '../components/list.jsx';
import Paginator from '../components/paginator.jsx';

let limit = 10 // number by pages
let page = 0

function Home({ pokemons, total }) {
  const [offset, setOffset] = useOffset();

  return (
    <>
      <List 
        pokemons = { pokemons } 
      />
      <Paginator
        totalPages = { total }
        currentPage = { offset }
        itemsPage = { limit }
      />
    </>
    
  ) 
}

export async function getStaticProps()  {
  let url = "https://pokeapi.co/api/v2/pokemon/?limit=" + limit + "&offset=" + page
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