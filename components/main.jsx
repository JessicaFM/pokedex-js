import Cards from '../components/cards.jsx';
import Searcher from '../components/searcher.jsx';

export default function() {
    return (
        <div className="container mx-auto">
            <Searcher />
            <Cards 
                pokemons = { pokemonArray } />
        </div>
    )
}