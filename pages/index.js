import Cards from '../components/cards.jsx';
import styles from '../styles/Home.module.css'

const initialPokemons = [1, 2, 3]

function Home({ pokemon1, pokemon2, pokemon3 }) {
  let pokemonArray = [ pokemon1, pokemon2, pokemon3 ]
  return (
    <Cards 
        pokemons = { pokemonArray } />
  )
}

export async function getStaticProps()  {
  const [ pokemon1Res, pokemon2Res, pokemon3Res ] = await Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch('https://pokeapi.co/api/v2/pokemon/2'),
    fetch('https://pokeapi.co/api/v2/pokemon/3')
  ])

  const [ pokemon1, pokemon2, pokemon3 ] = await Promise.all([
    pokemon1Res.json(),
    pokemon2Res.json(),
    pokemon3Res.json(),
  ])

  return {
    props: {
      pokemon1,
      pokemon2,
      pokemon3
    },
  }
}

export default Home