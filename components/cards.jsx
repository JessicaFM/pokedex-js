import Card from './card.jsx'

function Cards({ pokemons }) {
    return (
        <div className='gap-8 grid grid-cols-2 md:grid-cols-3 pt-5'>
           { pokemons.map(
                (pokemon) => (
                    <Card 
                        key = { pokemon.name }
                        pokemon = { pokemon }
                    />
                ) 
            )}
        </div>
    )
} 

export default Cards